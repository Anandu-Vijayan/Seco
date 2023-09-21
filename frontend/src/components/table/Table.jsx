import React, { useEffect, useState } from "react";
import Modal from "../modal/Modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Table = () => {
    const [showDropDown, setShowDropDown] = useState(false); // Change the initial state to false
    const [selectedClient, setSelectedClient] = useState("New");
    const [showModal, setShowModal] = useState(false); // Change the initial state to false
    const [allData, setAllData] = useState([]);
    const [selectedDataId, setSelectedDataId] = useState(null); // Store the selected data ID
  
    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    const navigate = useNavigate();
  
    // show dropDown
    const showDropDownBar = () => {
      setShowDropDown(!showDropDown);
    };
  
    const handleSelectChange = (e, index) => {
      // Set the selectedClient for the specific data item
      const updatedAllData = [...allData];
      updatedAllData[index].selectedClient = e.target.value;
      setAllData(updatedAllData);
    };
  
    const showEdit = (index) => {
      // Get the ID of the selected data item
      const dataId = allData[index]._id;
      setSelectedDataId(dataId);
      navigate("/edit");
    };
  
    const getallData = async () => {
      try {
        axios.get("http://localhost:5000/getAll").then((res) => {
          setAllData(res.data.allUser);
          console.log(res.data);
        });
      } catch (error) {}
    };
  
    useEffect(() => {
      getallData();
    }, []);

  return (
    <div>
      <div className="relative overflow-x-auto pt-20 px-5 h-screen">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-[#005c4b] ">
          <thead className="text-xs text-white ">
            <tr>
              <th scope="col" className="px-6 py-3 rounded-l-lg">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Basic Details
              </th>
              <th scope="col" className="px-6 py-3 rounded-r-lg">
                Numbers
              </th>

              <th scope="col" className="px-6 py-3 rounded-r-lg">
                Services
              </th>
              <th scope="col" className="px-6 py-3 rounded-r-lg">
                Comments
              </th>
              <th scope="col" className="px-6 py-3 rounded-r-lg">
                Other Details
              </th>
              <th scope="col" className="px-6 py-3 rounded-r-lg">
                Status
              </th>
              <th scope="col" className="px-6 py-3 rounded-r-lg">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {allData.map((data, index) => (
              <tr key={index} className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.no}
                </th>
                <td className="px-6 py-4">
                  <strong>Name:</strong> {data.name} <br />
                  <strong>Company:</strong> {data.companyName}
                </td>
                <td className="px-6 py-4">
                  <td className="px-6 py-4">
                    <strong>MobileNumber:</strong> {data.mobileNumber} <br />
                    <strong>whatsapp:</strong> {data.whatsapp}
                  </td>
                </td>
                <td className="px-6 py-4">
                  <td className="px-6 py-4">{data.services}</td>
                </td>
                <td className="px-6 py-4">
                  <td className="px-6 py-4">{data.comments}</td>
                </td>
                <td className="px-6 py-4">
                  <td className="px-6 py-4">
                    <strong>Amount:</strong> {data.amount} <br />
                    <strong>CreatedAt:</strong> {data.createdAt}
                  </td>
                </td>
                <td className="px-6 py-4 relative">
                  <button
                    id={`dropdownHoverButton${index}`}
                    data-dropdown-toggle={`dropdownHover${index}`}
                    data-dropdown-trigger="hover"
                    type="button"
                  >
                    <select
                      value={data.selectedClient}
                      onChange={(e) => handleSelectChange(e, index)}
                      className="focus:outline-none focus:to-blue-600 border border-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-32"
                    >
                      <option className="" value="New">
                        New
                      </option>
                      <option className="" value="Following">
                        Following
                      </option>
                    </select>
                  </button>
                </td>
                <td className="px-6 py-4 flex gap-5">
                  <button
                    className="bg-orange-500 px-5 py-2 text-white rounded-md"
                    onClick={() => showEdit(index)}
                  >
                    EDIT
                  </button>
                  {data.selectedClient === "Following" && (
                    <button className="bg-blue-500 px-5 py-2 text-white rounded-md">
                      FOLLOWUP
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal === true && <Modal id={selectedDataId} closeModal={closeModal} />}
    </div>
  );
};

export default Table;
