// src/pages/BuildCakePage.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import CakePreview from "../components/CakePreviewSVG";
import FlavorSelector from "../components/FlavorSelector";
import { cakeBases } from "../data/cakeBases";
import { fillings } from "../data/fillings";
import { flavorCombos } from "../data/flavorCombos";
import { useCakeBuilder } from "../hooks/useCakeBuilder";
import "../assets/scss/BuildCakePage.scss";
import Header from "../components/Header";
import SaveCakeModal from "../components/SaveCakeModal";

const BuildCakePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolla till toppen
  }, []);
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
    clear,
    loadSaved,
  } = useCakeBuilder();

  // Vänd lagren för korrekt visning i SVG
  const svgLayers = [...previewLayers].reverse();

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // För AI-förslag
  const suggestions = useMemo(() => {
    if (!base) return [];
    return flavorCombos.filter((c) => c.base === base);
  }, [base]);

  // CakeData som skickas till modal
  const cakeData = {
    base,
    fillings: fillingsSelected,
    layers,
    frosting,
  };

  // Hämtar sparade kombinationer
  const saved = loadSaved();

  return (
    <>
      <Header />
      <Container className="build-page">
        <h1 className="text-center mb-3">Bygg din tårta</h1>

        <Row>
          {/* Förhandsvisning + Spara */}
          <Col xs={12} md={5} className="mb-3">
            <Card className="p-3">
              <h5 className="mb-2">Förhandsvisning</h5>
              <CakePreview layers={svgLayers} width={320} />

              <div className="mt-3 d-flex gap-2 flex-column flex-md-row">
                <Button id="bakery" onClick={() => setShowModal(true)}>
                  Spara
                </Button>
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

          {/* Välj bas, fyllning, lager, frosting */}
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
                    onToggle={toggleFilling}
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
                          className={`frosting-option ${
                            frosting === f ? "selected" : "unselected"
                          }`}
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

      {/* Modal för att spara tårtan */}
      <SaveCakeModal
        show={showModal}
        onHide={() => setShowModal(false)}
        cakeData={cakeData}
      />
    </>
  );
};

export default BuildCakePage;
