import React, {Component} from "react";

function Profile() {
  return (
    <main className="main">
      <img
        src="https://images.all-free-download.com/images/graphicthumb/beautiful_cat_picture_6_168770.jpg"
        alt="cat"
      ></img>
      Profile
      <div>avatar + description</div>
      <section>
        Posts
        <article>new post (create)</article>
        <article>Post 1</article>
        <article>Post 2</article>
      </section>
    </main>
  );
}

export default Profile;
