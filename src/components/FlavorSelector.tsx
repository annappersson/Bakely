import { Card, Row, Col, Badge } from "react-bootstrap";
import "../assets/scss/FlavorSelector.scss";

type Option = {
  id: string;
  name: string;
  color?: string;
  description?: string;
};

interface Props {
  title?: string;
  options: Option[];
  selectedIds: string[];
  single?: boolean; // single-select if true
  onToggle: (id: string) => void;
}

export default function FlavorSelector({
  title,
  options,
  selectedIds,
  onToggle,
}: Props) {
  return (
    <div className="flavor-selector">
      {title && <h5 className="step-title">{title}</h5>}
      <Row xs={2} sm={3} lg={4} className="g-2">
        {options.map((o) => {
          const selected = selectedIds.includes(o.id);
          return (
            <Col key={o.id}>
              <Card
                className={`flavor-card ${selected ? "selected" : ""}`}
                onClick={() => onToggle(o.id)}
                role="button"
                aria-pressed={selected}
              >
                <div
                  className="color-swatch"
                  style={{ background: o.color || "#eee" }}
                />
                <Card.Body className="p-2">
                  <Card.Title as="h6" className="m-0">
                    {o.name}
                  </Card.Title>
                  {o.description && (
                    <small className="text-muted d-block">
                      {o.description}
                    </small>
                  )}
                </Card.Body>
                {selected && (
                  <Badge bg="warning" className="selected-badge">
                    ✓
                  </Badge>
                )}
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
