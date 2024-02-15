import React from "react";

const CCard = ({
  title,
  tool: Tool,
  titleColor,
  headerIcon,
  children,
  underLine,
  cardHeaderComponent: CardHeaderComponent,
  cardStyle,
  cardHeaderStyle,
  cardBodyStyle,
  cardTitleStyle,
  boxShadow = "0 0.8px 6px 2px rgba(0, 0, 0, 0.208)",
  ...others
}) => {
  return (
    <div
      className="card"
      style={{ boxShadow: boxShadow, marginBottom: "0", ...cardStyle }}
      {...others}
    >
      {(title || Tool || CardHeaderComponent) && (
        <div
          className="card-header row align-items-center m-0 py-1 px-3"
          style={cardHeaderStyle}
        >
          <div className="col p-0">
            {title && (
              <h3
                className="card-title"
                style={{
                  color: `${titleColor ?? "black"}`,
                  fontWeight: "600",
                  ...cardTitleStyle,
                }}
              >
                {headerIcon && <i className={headerIcon}></i>}
                {title}
              </h3>
            )}
          </div>

          {CardHeaderComponent && (
            <div className="col-lg-4 col-md-5 col-5 px-2 d-flex justify-content-center">
              <CardHeaderComponent />
            </div>
          )}

          <div className="col p-0">
            {Tool && (
              <div className="d-flex justify-content-end">
                <div className="card-tools">
                  <Tool />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div
        className="card-body"
        style={{ fontWeight: "normal", padding: "0", ...cardBodyStyle }}
      >
        {children}
      </div>
    </div>
  );
};

export default CCard;
