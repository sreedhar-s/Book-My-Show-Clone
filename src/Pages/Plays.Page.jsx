import React from "react";

//component
import Poster from "../components/Poster/Poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const PlaysPage = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse gap-10 my-6">
          
          <div className="lg:w-3/4">
            <div className="w-full">
              <h2 className="font-bold text-2xl text-gray-800">Plays in Guntakal</h2>
            </div>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyOCBGZWIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311497-qwrmlmecnm-portrait.jpg"
                  title="Online Game - Flight 9032 Murder Mystery"
                  subtitle="Telugu ₹ 500"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyOCBGZWIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311497-qwrmlmecnm-portrait.jpg"
                  title="Online Game - Flight 9032 Murder Mystery"
                  subtitle="Telugu ₹ 500"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyOCBGZWIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311497-qwrmlmecnm-portrait.jpg"
                  title="Online Game - Flight 9032 Murder Mystery"
                  subtitle="Telugu ₹ 500"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyOCBGZWIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311497-qwrmlmecnm-portrait.jpg"
                  title="Online Game - Flight 9032 Murder Mystery"
                  subtitle="Telugu ₹ 500"
                />
              </div>

              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyOCBGZWIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311497-qwrmlmecnm-portrait.jpg"
                  title="Online Game - Flight 9032 Murder Mystery"
                  subtitle="Telugu ₹ 500"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyOCBGZWIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311497-qwrmlmecnm-portrait.jpg"
                  title="Online Game - Flight 9032 Murder Mystery"
                  subtitle="Telugu ₹ 500"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyOCBGZWIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311497-qwrmlmecnm-portrait.jpg"
                  title="Online Game - Flight 9032 Murder Mystery"
                  subtitle="Telugu ₹ 500"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyOCBGZWIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311497-qwrmlmecnm-portrait.jpg"
                  title="Online Game - Flight 9032 Murder Mystery"
                  subtitle="Telugu ₹ 500"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4">
            <h2 className="font-bold text-2xl mb-4 text-gray-800">Filters</h2>
            <div className="flex flex-col Items-start gap-5">
              <PlaysFilter 
                title="Date" 
                tags={["Today", "Tomorrow", "This weekend"]} 
              />
              <PlaysFilter 
                title="Language" 
                tags={["Telugu", "Hindi", "English"]} 
              />
              <PlaysFilter 
                title="Categories" 
                tags={["Storytelling", "Theatre", "Puppetry"]} 
              />
              <PlaysFilter 
                title="Genres" 
                tags={["Drama"]} 
              />
              <PlaysFilter 
                title="More Filters" 
                tags={["Outdoor Events"]} 
              />
              <PlaysFilter 
                title="Price" 
                tags={["Free", "0-500", "500-2000", "Above 2000"]} 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaysPage;
