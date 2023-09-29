import { useState } from "react";
import { useCountryListQuery } from "../features/countryApi/countryApi";

const Problem2 = () => {
  const [modal, setModal] = useState("A");
  const { data: countryLists } = useCountryListQuery();
  console.log(countryLists.results);
  const handleOnclick = (name) => {
    setModal(name);
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-outline-primary"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            onClick={() => handleOnclick("A")}
          >
            All Contacts
          </button>
          <button
            className="btn btn-lg btn-outline-warning"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            onClick={() => handleOnclick("B")}
          >
            US Contacts
          </button>
        </div>
        <div className="modal" id="myModal">
          <div className="modal-dialog modalCenter">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Modal {modal}</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">
                <button
                  className="btn  mx-2"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                  style={{ backgroundColor: "#46139f" }}
                  onClick={() => handleOnclick("A")}
                >
                  All Contacts
                </button>
                <button
                  className="btn "
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal"
                  onClick={() => handleOnclick("B")}
                  style={{ backgroundColor: "#ff7f50" }}
                >
                  US Contacts
                </button>
                <table className="table table-striped ">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {countryLists.results.map((data) => (
                      <tr>
                        <td>{data.id}</td>
                        <td>{data.country.phone}</td>
                        <td>{data.country.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="modal-footer">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Only Even </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
