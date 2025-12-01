import React, { useMemo, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import CakePreview from "../components/CakePreviewSVG";
import FlavorSelector from "../components/FlavorSelector";
import { cakeBases } from "../data/cakeBases";
import { fillings } from "../data/fillings";
import { flavorCombos } from "../data/flavorCombos";
import { useCakeBuilder } from "../hooks/useCakeBuilder";
import "../assets/scss/BuildCakePage.scss";

const BuildCakePage: React.FC = () => {
  const {
    base,
    setBase,
    fillingsSelected,
    toggleFilling,
    frosting,
    setFrosting,
    layers,
    setLayers,
    previewLayers,
    saveCombo,
    clear,
    loadSaved,
  } = useCakeBuilder();

  // ⭐ ENDA ÄNDRINGEN → vänd lagren
  const svgLayers = [...previewLayers].reverse();

  const [comboName, setComboName] = useState("");

  const suggestions = useMemo(() => {
    if (!base) return [];
    return flavorCombos.filter((c) => c.base === base);
  }, [base]);

  const handleSave = () => {
    if (!comboName) {
      alert("Ge din tårta ett namn först");
      return;
    }
    saveCombo(comboName);
    alert("Sparat!");
    setComboName("");
  };

  const saved = loadSaved();

  return (
    <Container className="build-page p-3">
      <h1 className="text-center mb-3">Bygg din tårta</h1>

      <Row>
        <Col xs={12} md={5} className="mb-3">
          <Card className="p-3">
            <h5 className="mb-2">Förhandsvisning</h5>

            {/* 🆕 Skicka de vända lagren */}
            <CakePreview layers={svgLayers} width={320} />

            <div className="mt-3 d-flex gap-2">
              <InputGroup>
                <Form.Control
                  placeholder="Namn på din tårta"
                  value={comboName}
                  onChange={(e) => setComboName(e.target.value)}
                />
                <Button variant="primary" onClick={handleSave}>
                  Spara
                </Button>
              </InputGroup>
              <Button variant="outline-secondary" onClick={clear}>
                Återställ
              </Button>
            </div>

            {saved.length > 0 && (
              <div className="mt-3">
                <h6>Sparade</h6>
                <ul>
                  {saved.map((s: any) => (
                    <li key={s.id}>{s.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        </Col>

        <Col xs={12} md={7}>
          <Card className="p-3">
            <Row className="g-3">
              <Col xs={12}>
                <FlavorSelector
                  title="1 • Välj bas"
                  options={cakeBases.map((b) => ({
                    id: b.id,
                    name: b.name,
                    color: b.color,
                    description: b.description,
                  }))}
                  selectedIds={base ? [base] : []}
                  single
                  onToggle={(id) => setBase(id === base ? null : id)}
                />
              </Col>

              <Col xs={12}>
                <FlavorSelector
                  title="2 • Lägg till fyllning (välj en eller flera)"
                  options={fillings.map((f) => ({
                    id: f.id,
                    name: f.name,
                    color: f.color,
                    description: f.description,
                  }))}
                  selectedIds={fillingsSelected}
                  onToggle={(id) => toggleFilling(id)}
                />
              </Col>

              <Col xs={12} sm={6}>
                <div className="step-title">3 • Antal lager</div>
                <div className="layer-control d-flex align-items-center gap-2 mt-2">
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={() => setLayers(Math.max(1, layers - 1))}
                  >
                    −
                  </Button>
                  <div className="layer-count px-3">{layers} Lager</div>
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={() => setLayers(Math.min(6, layers + 1))}
                  >
                    +
                  </Button>
                </div>
              </Col>

              <Col xs={12} sm={6}>
                <div className="step-title">4 • Frosting</div>
                <div className="mt-2 d-flex gap-2 flex-wrap">
                  {["Smörkräm", "Cream Cheese", "Grädde", "Ganache"].map(
                    (f) => (
                      <Button
                        key={f}
                        variant={
                          frosting === f ? "warning" : "outline-secondary"
                        }
                        onClick={() => setFrosting(f === frosting ? null : f)}
                        size="sm"
                      >
                        {f}
                      </Button>
                    )
                  )}
                </div>
              </Col>

              <Col xs={12}>
                <div className="suggestions mt-3">
                  <h6>AI Förslag</h6>
                  {base ? (
                    suggestions.length ? (
                      suggestions.map((s) => (
                        <p key={s.base}>
                          <strong>{s.suggestion}</strong>
                        </p>
                      ))
                    ) : (
                      <p className="text-muted">
                        Inga specifika förslag, prova att blanda fyllningar
                        eller byta botten.
                      </p>
                    )
                  ) : (
                    <p className="text-muted">
                      Välj en bas för att få förslag.
                    </p>
                  )}
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BuildCakePage;
