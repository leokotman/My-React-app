let state = {
  profilePage: {
    posts: [
      {id: 1, message: "Hey how are you?", likes: 50, views: 200},
      {id: 2, message: "It's my second post", likes: 30, views: 100},
      {id: 3, message: "Yo what's up guys?", likes: 60, views: 300},
    ],
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: "Leo"},
      {id: 2, name: "Jes"},
      {id: 3, name: "Mum"},
      {id: 4, name: "Gra"},
      {id: 5, name: "Alex"},
    ],
    messages: [
      {id: 1, message: "Hi"},
      {id: 2, message: "How are you?"},
      {id: 3, message: "Let's meet tomorrow, bro"},
    ],
  },
  sidebar: {
    friends: [
      {id: 1, name: "Leo", img: "img1"},
      {id: 2, name: "Jes", img: "img2"},
      {id: 3, name: "Mum", img: "img3"},
      {id: 4, name: "Gra", img: "img4"},
      {id: 5, name: "Alex", img: "img5"},
    ],
  },
};

export let addPost = (postText) => {
  debugger;
  let newPost = {
    id: state.profilePage.posts.length,
    message: postText,
    likes: 0,
    views: 0,
  };
  state.profilePage.posts.push(newPost);
};

export default state;
