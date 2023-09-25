import React, { useState, useRef } from "react";
import { FiUpload } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { v4 as uuid } from "uuid";
import { useEventsContext } from "../context/eventsContext";
import { addCategories } from "../constants/categories";
import { useAuthContext } from "../context/authContext";
import { storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import LoadingModal from "../components/LoadingModal";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
  const navigate = useNavigate();

  //Global State
  const { addEvent } = useEventsContext();
  const { userDetails } = useAuthContext();

  //Local state
  const [selectedImage, setSelectedImage] = useState(null);
  const [imgToView, setImgToView] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Refs for input elements
  const nameInputRef = useRef();
  const dateInputRef = useRef();
  const timeInputRef = useRef();
  const descInputRef = useRef();
  const webInputRef = useRef();
  const twtInputRef = useRef();
  const teleInputRef = useRef();
  const fileInputRef = useRef(null);

  // Drag and Drop handler
  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const selectedFile = files[0];
      setSelectedImage(selectedFile ? selectedFile : null);
      setImgToView(selectedFile ? URL.createObjectURL(selectedFile) : null);
    }
  };

  //To Select image
  // Trigger a click event on the Image input element
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    setSelectedImage(file ? file : null);
    setImgToView(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameInputRef.current.value.length > 20) {
      alert(
        "Event Name can't be more than 20 characters, It should be short and precise"
      );
      return;
    }

    if (descInputRef.current.value.length > 200) {
      alert("Event Description can't be more than 200 characters");
      return;
    }

    setIsLoading(true);
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
            date: dateInputRef.current.value,
            desc: descInputRef.current.value,
            imgurl: url,
            name: nameInputRef.current.value,
            telegram: teleInputRef.current.value,
            time: timeInputRef.current.value,
            twitter: twtInputRef.current.value,
            website: webInputRef.current.value,
          };

          // Call the addEvent function with the newEventData
          addEvent(newEventData);
          setIsLoading(false);
          navigate("/");
        });
      }
    );
  };

  return (
    <div className="relative w-full pt-[60px] pb-[40px]">
      {isLoading && <LoadingModal />}
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="mx-auto w-[90%] xmd:w-[80%]"
      >
        <div
          onDragEnter={handleDragEnter}
          onDragOver={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className="relative w-full h-[200px] vsm:h-[250px] sm:h-[355px] bg-transparent border-white border-2 border-dashed"
        >
          <div className="w-full h-full flex flex-col items-center gap-[16px] justify-center">
            <div className="hidden bg-white h-[57px] w-[57px] rounded-full vsm:grid place-items-center">
              <FiUpload className="text-[#453DDB]" />
            </div>
            <p className="hidden vsm:block text-center text-white text-2xl">
              {isDragging ? "Drop the image here" : "Drag and drop Image here"}
              <br />
              OR
            </p>
            <button
              onClick={handleClick}
              className="rounded-2xl border border-indigo-600 py-[14px] px-[70.5px] text-white text-base font-medium"
            >
              Browse Images
            </button>
            <input
              type="file"
              id="imgurl"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }} // Hide the file input
              ref={fileInputRef} // Associate the ref with the input element
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
              <input type="url" id="web" ref={webInputRef} required />
            </div>

            <div>
              <label htmlFor="twt">
                <FaXTwitter />
              </label>
              <input type="url" id="twt" ref={twtInputRef} />
            </div>

            <div>
              <label htmlFor="tele">
                <FaTelegram />
              </label>
              <input type="url" id="twt" ref={teleInputRef} />
            </div>
          </div>
        </div>

        <input
          type="submit"
          className="mt-[80px] block mx-auto px-[70px] pt-3 pb-[13px] bg-indigo-600 border-none cursor-pointer rounded text-white text-base font-medium"
          value={!isLoading ? "ADD EVENT" : "Loading..."}
        />
      </form>
    </div>
  );
};

export default AddEvent;
