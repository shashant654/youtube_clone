import React from "react";

const commentsData = [
  {
    name: "Shashant Shekhar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Shashant Shekhar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Shashant Shekhar",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Shashant Shekhar",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Shashant Shekhar",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Shashant Shekhar",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [
                          {
                            name: "Shashant Shekhar",
                            text:
                              "Lorem ipsum dolor sit amet, consectetur adip",
                            replies: [
                              {
                                name: "Shashant Shekhar",
                                text:
                                  "Lorem ipsum dolor sit amet, consectetur adip",
                                replies: [
                                  {
                                    name: "Shashant Shekhar",
                                    text:
                                      "Lorem ipsum dolor sit amet, consectetur adip",
                                    replies: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shashant Shekhar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Shashant Shekhar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Shashant Shekhar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Shashant Shekhar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Shashant Shekhar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Shashant Shekhar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];


const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="h-8"
        src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
        alt="user-icon"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>

      </div>
    </div>
  );
};


const CommentsList = ({ comments }) => { // here we have to do destructuring like ({ comments }) 
  return comments.map((comment, index) => (
     <div>
      <Comment key={index} data={comment} />
       <div className="pl-5 border border-l-black ml-5">
        {/* here we use Recursion  */}
        <CommentsList comments={comment.replies} />
      </div> 
     </div> 
  ));
};


const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;




// *** for getting only comments not replies  *****
// const CommentsList = ({ comments }) => { // here we have to do destructuring like ({ comments }) 
//   return comments.map((comment, index) => (
     
//       <Comment key={index} data={comment} />
//   ));
// };


// const CommentsList = ({ data }) => {
//   return(
//     <>
//     {
//       data.map((comment , index)=>{
//         console.log("The working fine"+comment)
        
//       })
//     }
//     </>
//   )
// }






