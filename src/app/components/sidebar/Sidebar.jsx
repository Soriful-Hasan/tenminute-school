import {
  FaUserGraduate,
  FaClock,
  FaVideo,
  FaFileAlt,
  FaBook,
  FaFacebook,
  FaInfinity,
} from "react-icons/fa";
import { MdLibraryBooks, MdOutlineOndemandVideo } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import PlayVideo from "./PlayVideo";
export default function Sidebar() {
  const data = [
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png",
      title: "Total Enrolled 33018",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png",
      title: "Time Required 50 hours",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png",
      title: "54 Videos",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png",
      title: "10 Reading & 10 Listening Mocktests",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png",
      title: "38 Lecture Sheets",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png",
      title: "25 Video Lectures",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/Landing_page/pdp_icon_flashcard.png",
      title: "1 Free Hardcopy Book Delivered",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png",
      title: "Facebook Support Group",
    },
    {
      icon: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png",
      title: "Course Validity Lifetime",
    },
  ];

  return (
    <aside className="  border border-gray-200 w-sm  bg-white">
      {/* play video  */}
      <div className="">
        <PlayVideo />
      </div>
      <div className="">
        <div className="p-4 space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="font-semibold text-xl ">1000 Taka</h1>
            <h1 className="text-decoration: line-through  font-semibold ">
              3000 Taka
            </h1>
          </div>
          <div className="">
            <button className=" w-full  font-bold cursor-pointer text-white bg-[#15803D]  py-4 px-3 rounded-md">
              Enroll
            </button>
          </div>
          <div className="space-y-3">
            <h1 className="text-lg text-gray-800 font-semibold">
              এই কোর্সে যা থাকছে
            </h1>
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <img src={item.icon} alt="icon" className="w-5 h-5" />
                <span className="font-semibold text-gray-600">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
