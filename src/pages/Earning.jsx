import React, { useState } from "react";
import VideoListTable from "../components/VideoListTable";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  boxShadow: 100,
  p: 6,
};

const Earning = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/"); // Replace "/" with the actual path of your home page
  };
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const videoDetails = location?.state?.videoDetails || null;

  const calculateEarnings = (videoDetails) => {
    const views = videoDetails.statistics.viewCount;
    const comments = videoDetails.statistics.commentCount;
    const likes = videoDetails.statistics.likeCount;
    const subscriberCount = videoDetails.channelSubscriberCount;

    // Calculate earnings based on the provided formula
    const earnings =
      Math.min(subscriberCount, views) + 10 * comments + 5 * likes;

    return earnings;
  };

  const earnings = calculateEarnings(videoDetails);

  return (
    <>
      <div className="flex items-center justify-between w-full h-20 px-32 py-12 ">
        <div
          className="flex flex-row items-center gap-4 cursor-pointer"
          onClick={() => redirectToHome()}
        >
          <img
            className="flex items-center justify-center "
            src="src\assets\image 2.png"
            alt=""
          />
          <span className="text-2xl font-semibold text-white ">anchors</span>

          <div className=" inline-flex  bg-[#CCC] text-[13px] px-2 rounded-md mb-5 ">
            <span>Beta</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 px-8 py-2  border border-white rounded-[20px] mr-10 ">
          <img src="src\assets\Phone.png" alt="" />
          <button
            className="text-base font-normal text-white "
            onClick={handleOpen}
          >
            Request a call back
          </button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={style}
              className="flex flex-col items-center justify-center gap-6 rounded-lg"
            >
              <h1
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="text-[#FFF] text-[24px]"
              >
                Request a call back
              </h1>

              <input
                placeholder="Enter Name"
                className="px-12 py-3 rounded-lg bg-[#1E1E1E] text-white border border-gray-400 border-opacity-80 "
              />

              <input
                placeholder="Mobile number"
                className="px-12 py-3 rounded-lg bg-[#1E1E1E] text-white border border-gray-400 border-opacity-80"
              />

              <button className="px-8 py-2 text-black bg-white rounded-[20px]">
                Request a call back
              </button>
            </Box>
          </Modal>
        </div>
      </div>

      {videoDetails && (
        <div className="bg-[#1E1E1E] mx-40 my-20 rounded-xl p-10 grid grid-cols-3 gap-4">
          <div className="flex flex-col justify-start gap-2">
            <div className="bg-[#707070] flex w-40 p-1 rounded-md flex-row">
              <img src="src\assets\mdi_prize.png" alt="" />
              <span className="text-white">Top earner video</span>
            </div>
            <img
              src={videoDetails.snippet.thumbnails.standard.url}
              alt=""
              className="w-[240px] h-[135px] mt-2 rounded-lg"
            />
            <span className="text-[#FFFFFF]">
              Uploaded on -{" "}
              {format(
                new Date(videoDetails.snippet.publishedAt),
                "MMMM d, yyyy"
              )}
            </span>
          </div>

          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-white text-[20px] font-semibold">
              {videoDetails.snippet.title}
            </h1>

            <div className="flex flex-col justify-start gap-4 text-white">
              <span className="flex flex-row gap-4">
                <img src="src\assets\mdi_eye.png" alt="" />{" "}
                {videoDetails.statistics.viewCount}
              </span>
              <span className="flex flex-row gap-4">
                <img src="src\assets\material-symbols_thumb-up.png" alt="" />{" "}
                {videoDetails.statistics.likeCount}
              </span>
              <span className="flex flex-row gap-4">
                <img src="src\assets\mdi_comment.png" alt="" />{" "}
                {videoDetails.statistics.commentCount}
              </span>
            </div>
          </div>

          <div class=" flex items-center justify-center flex-col gap-4 bg-[#282828] rounded-lg">
            <span className="text-[40px] font-semibold text-white mb-4">
              &#x20B9;{earnings}
            </span>
            <button className="flex items-center justify-center w-36 h-12 gap-4 p-4 bg-red-500 font-semibold cursor-pointer rounded-[24px]">
              Check How?
            </button>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center ">
        <h1 className=" flex items-center mb-4 text-[#FFFFFFB2]  text-[20px]">
          Other Videos Potentials
        </h1>
      </div>
      <VideoListTable />
    </>
  );
};

export default Earning;
