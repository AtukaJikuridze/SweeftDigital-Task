import { useContext } from "react";
import "./PhotoDetails.css";
import { MdDownload } from "react-icons/md";
import { MyContext } from "../../Context/myContext";

export default function PhotoDetails() {
  const context = useContext(MyContext);
  console.log(context?.modalInfo);

  return (
    <div className={`photo-details-main ${context?.modalInfo ? "active" : ""}`}>
      <div className="photo-details-modal">
        <div className="close" onClick={() => context?.setModalInfo(null)}>
          <div></div>
          <div></div>
        </div>

        <img src={context?.modalInfo?.image} alt="" />
        <div className="modal-info">
          <a href={context?.modalInfo?.downloadLink} download={true}>
            <MdDownload />
          </a>
          <h2>ნახვები :{context?.modalInfo?.views}</h2>
          <h2>მოწონებები :{context?.modalInfo?.likes}</h2>
        </div>
      </div>
    </div>
  );
}
