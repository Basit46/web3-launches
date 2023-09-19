import React, { useState, useRef } from "react";
import { FiUpload } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { v4 as uuid } from "uuid";
import { useEventsContext } from "../context/eventsContext";
import { categories } from "../constants/categories";
import { useAuthContext } from "../context/authContext";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddEvent = () => {
  //Global State
  const { addEvent } = useEventsContext();
  const { userDetails } = useAuthContext();

  //Local state
  const [newEvent, setNewEvent] = useState({
    category: "",
    date: "",
    desc: "",
    discord: "",
    facebook: "",
    imgurl: "",
    instagram: "",
    locationUrl: "",
    name: "",
    telegram: "",
    time: "",
    twitter: "",
    website: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgToView, setImgToView] = useState(null);

  // Refs for input elements
  const nameInputRef = useRef();
  const categoryInputRef = useRef();
  const linkInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();
  const descInputRef = useRef();
  const webInputRef = useRef();
  const fbInputRef = useRef();
  const igInputRef = useRef();
  const dsInputRef = useRef();
  const twtInputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    setSelectedImage(file ? file : null);
    setImgToView(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userDetails.uid == null) {
      alert("Login with your Google account firstly in order to add event");
      return;
    }

    const storageRef = ref(storage, `/files/${uuid()}img`);
    const uploadTask = uploadBytesResumable(storageRef, selectedImage);
    uploadTask.on(
      "state_changed",
      () => {},
      (err) => {
        console.log(err);
      },
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          const newEventData = {
            id: uuid(),
            category: categoryInputRef.current.value,
            date: dateInputRef.current.value,
            desc: descInputRef.current.value,
            discord: dsInputRef.current.value,
            eventAdderUid: userDetails.uid,
            facebook: fbInputRef.current.value,
            imgurl: url,
            instagram: igInputRef.current.value,
            locationUrl: linkInputRef.current.value,
            name: nameInputRef.current.value,
            telegram: newEvent.telegram,
            time: timeInputRef.current.value,
            twitter: twtInputRef.current.value,
            website: webInputRef.current.value,
          };

          // Call the addEvent function with the newEventData
          addEvent(newEventData);
          console.log("done");
        });
      }
    );
  };

  return (
    <div className="w-full pt-[60px] pb-[40px]">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="mx-auto w-[90%] xmd:w-[80%]"
      >
        <div className="relative w-full h-[355px] bg-transparent border-white border-2 border-dashed">
          <div className="w-full h-full flex flex-col items-center gap-[16px] justify-center">
            <div className="bg-white h-[57px] w-[57px] rounded-full grid place-items-center">
              <FiUpload className="text-[#453DDB]" />
            </div>
            <p className="text-center text-white text-2xl">
              Drag and drop files here
              <br />
              OR
            </p>
            <button className="rounded-2xl border border-indigo-600 py-[14px] px-[70.5px] text-white text-base font-medium">
              Browse Files
            </button>
            <input
              type="file"
              id="imgurl"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {imgToView && (
            <div className="absolute top-0 left-0 w-full h-full">
              <img
                src={imgToView}
                alt="Selected"
                className="w-full h-full bg-cover"
              />
            </div>
          )}
        </div>

        <div className="mt-[64px] flex flex-col xmd:flex-row justify-between gap-[96px]">
          <div className="left w-full xmd:w-[60%] flex flex-col gap-[16px]">
            <label htmlFor="name">Event Name</label>
            <input type="text" id="name" ref={nameInputRef} required />

            <label htmlFor="categ">Event Category</label>
            <select
              className="text-white bg-transparent"
              id="categ"
              ref={categoryInputRef}
            >
              {categories.map((category) => (
                <option
                  className="bg-[#121418]"
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </select>

            <label htmlFor="link">Event Link</label>
            <input type="text" id="link" ref={linkInputRef} required />

            <label htmlFor="date">Event Date</label>
            <input type="date" id="date" ref={dateInputRef} required />

            <label htmlFor="time">Event Time</label>
            <input type="time" id="time" ref={timeInputRef} required />

            <label htmlFor="desc">Event Description</label>
            <textarea
              className="h-[150px]"
              id="desc"
              ref={descInputRef}
            ></textarea>
          </div>

          <div className="right flex-1">
            <h1 className="text-white text-xl font-medium mb-[37px]">
              Socials
            </h1>

            <div>
              <label htmlFor="web">
                <TbWorld />
              </label>
              <input type="url" id="web" ref={webInputRef} />
            </div>

            <div>
              <label htmlFor="fb">
                <BiLogoFacebookCircle />
              </label>
              <input type="url" id="fb" ref={fbInputRef} />
            </div>

            <div>
              <label htmlFor="ig">
                <FaInstagramSquare />
              </label>
              <input type="url" id="ig" ref={igInputRef} />
            </div>

            <div>
              <label htmlFor="ds">
                <BsDiscord />
              </label>
              <input type="url" id="ds" ref={dsInputRef} />
            </div>

            <div>
              <label htmlFor="twt">
                <FaXTwitter />
              </label>
              <input type="url" id="twt" ref={twtInputRef} />
            </div>
          </div>
        </div>

        <input
          className="mt-[80px] block mx-auto px-[70px] pt-3 pb-[13px] bg-indigo-600 border-none cursor-pointer rounded text-white text-base font-medium"
          type="submit"
          value="ADD EVENT"
        />
      </form>
    </div>
  );
};

export default AddEvent;
