import { Link } from "react-router-dom";
import "./step.css";
import {
  Alert,
  BodyLong,
  Button,
  Heading,
  Link as DsLink,
  BodyShort,
} from "@navikt/ds-react";

function Step() {
  return (
    <main className="results-layout">
      <Heading size="large" level="1">
        Det ser ut som du kan få
      </Heading>
      <div className="summary">
        <span className="summary-box">
          <BodyShort as="span">9 130 kr</BodyShort>
          <BodyShort as="span">hver 14. dag (før skatt)</BodyShort>
        </span>
        <span className="summary-box">
          <BodyShort as="span">237 240 kr</BodyShort>
          <BodyShort as="span">i året (før skatt)</BodyShort>
        </span>
      </div>
      <BodyLong>
        Utfra tallene du har oppgitt, antar vi at du kan få denne summen i AAP før skatt.
      </BodyLong>
      <div>
        <Heading level="2" size="medium" spacing>
          Hvordan er beregningen gjort?
        </Heading>
        <BodyLong as="ul">
          <li>
            Siden inntekten din er lavere enn grensen for minste utbetaling for de under
            25 år blir beregningsgrunnlaget ditt oppjustert til 239 636 kr. Inntekten din
            er justert ut fra endring i grunnbeløpet.{" "}
          </li>
          <li>
            Arbeidsavklaringspengene utgjør 66 % av beregningsgrunnlaget. For deg blir
            dette under minstesatsen for arbeidsavklaringspenger. Du blir derfor justert
            opp til minstesatsen for arbeidsavklaringspenger, som er 158 160 kr.
          </li>
          <li>
            Hvis du jobber ved siden av AAP, kan dette redusere hva du får utbetalt. Du
            fører opp hvor mye du jobber hver 14. dag på meldekortet.
          </li>
          <li>
            Hvis du får andre ytelser ved siden av AAP, kan dette redusere hvor mye du får
            utbetalt. Kalkulatoren tar ikke hensyn til dette.
          </li>
        </BodyLong>
      </div>
      <Alert variant="info">
        Denne kalkulatoren gir kun et estimat. Hvis du søker og får innvilget AAP, vil du
        få vite hva du faktisk får.
      </Alert>
      <Button onClick={() => alert("Gikk til søknad!")}>Gå til søknad om AAP</Button>
      <DsLink as={Link} to="/steg-1">
        Tilbake til informasjonssiden om AAP
      </DsLink>
    </main>
  );
}

export default Step;
