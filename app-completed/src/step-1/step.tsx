import "./step.css";
import { Button, Heading, Radio, RadioGroup, ReadMore } from "@navikt/ds-react";

function Step() {
  return (
    <main>
      <Heading size="large" level="1" spacing>
        Arbeid
      </Heading>

      <form onSubmit={(e) => e.preventDefault()} className="form-layout">
        <div>
          <RadioGroup legend="Får du AAP nå?">
            <Radio value="ja">Ja</Radio>
            <Radio value="nei">Nei</Radio>
          </RadioGroup>
          <ReadMore header="Hvorfor spør vi om du får AAP nå?">
            Det er ulike regler for hvor mye du kan jobbe når:
            <ul>
              <li>du søker AAP</li>
              <li>etter du har fått innvilget AAP</li>
            </ul>
          </ReadMore>
        </div>
        <div>
          <RadioGroup legend="Jobber du nå?">
            <Radio value="ja">Ja</Radio>
            <Radio value="nei">Nei</Radio>
          </RadioGroup>
          <ReadMore header="Hvorfor spør vi om du har jobb?">
            Det er ulike regler for hvor mye du kan jobbe når du søker AAP og etter at du
            mottar AAP.
          </ReadMore>
        </div>
        <Button as="a" href="/steg-2">
          Gå videre
        </Button>
      </form>
    </main>
  );
}

export default Step;
