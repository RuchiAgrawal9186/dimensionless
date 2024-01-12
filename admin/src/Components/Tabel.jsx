import React from "react";

const Tabel = () => {
  return (
    <>
      <table
        className="table"
        style={{ padding: "5px", width: "100%", height: "200px" }}
      >
        <thead
          className="table-secondary"
          style={{ backgroundColor: "lightgray" }}
        >
          <tr style={{ height: "30px" }}>
            <th scope="col">
              <img src="./images/Triangle-Icon.svg" alt="" />
            </th>
            <th scope="col">Type</th>
            <th scope="col" style={{ width: "50%" }}>
              News
            </th>
            <th scope="col">Score</th>
            <th scope="col">Impact</th>
            <th scope="col">Probaility</th>
          </tr>
        </thead>
        <tbody
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <tr style={{ height: "50px" }}>
            <th scope="row"></th>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "100%",
                    backgroundColor: "orange",
                  }}
                ></div>
                <p>ERU</p>
              </div>
            </td>
            <td style={{ textAlign: "left" }}>
              The Euro has steadied againest the US Doller on Thursday as the
              market ponders the path of feed rate hikes
            </td>
            <td>+1</td>
            <td>Netural</td>
            <td>
              <span
                style={{
                  backgroundColor: "skyblue",
                  padding: "8px",
                  opacity: "0.5",
                }}
              >
                High
              </span>
            </td>
          </tr>
          <tr style={{ height: "50px" }}>
            <th scope="row"></th>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "100%",
                    backgroundColor: "green",
                  }}
                ></div>
                <p>ERU</p>
              </div>
            </td>
            <td style={{ textAlign: "left" }}>
              The Euro has steadied againest the US Doller on Thursday as the
              market ponders the path of feed rate hikes
            </td>
            <td>+1</td>
            <td>Netural</td>
            <td>
              <span
                style={{
                  backgroundColor: "skyblue",
                  padding: "8px",
                  opacity: "0.5",
                }}
              >
                High
              </span>
            </td>
          </tr>
          <tr style={{ height: "50px" }}>
            <th scope="row"></th>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "100%",
                    backgroundColor: "red",
                  }}
                ></div>
                <p>ERU</p>
              </div>
            </td>
            <td style={{ textAlign: "left" }}>
              The Euro has steadied againest the US Doller on Thursday as the
              market ponders the path of feed rate hikes
            </td>
            <td>+1</td>
            <td>Netural</td>
            <td>
              <span
                style={{
                  backgroundColor: "skyblue",
                  padding: "8px",
                  opacity: "0.5",
                }}
              >
                High
              </span>
            </td>
          </tr>
          <tr style={{ height: "50px" }}>
            <th scope="row"></th>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "100%",
                    backgroundColor: "blue",
                  }}
                ></div>
                <p>ERU</p>
              </div>
            </td>
            <td style={{ textAlign: "left" }}>
              The Euro has steadied againest the US Doller on Thursday as the
              market ponders the path of feed rate hikes
            </td>
            <td>+1</td>
            <td>Netural</td>
            <td>
              <span
                style={{
                  backgroundColor: "skyblue",
                  padding: "8px",
                  opacity: "0.5",
                }}
              >
                High
              </span>
            </td>
          </tr>
          <tr style={{ height: "50px" }}>
            <th scope="row"></th>
            <td>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  gap: "4px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "100%",
                    backgroundColor: "orange",
                  }}
                ></div>
                <p>ERU</p>
              </div>
            </td>
            <td style={{ textAlign: "left" }}>
              The Euro has steadied againest the US Doller on Thursday as the
              market ponders the path of feed rate hikes
            </td>
            <td>+1</td>
            <td>Netural</td>
            <td>
              <span
                style={{
                  backgroundColor: "skyblue",
                  padding: "8px",
                  opacity: "0.5",
                }}
              >
                High
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Tabel;
