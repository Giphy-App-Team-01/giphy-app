import { renderPageTitle } from '../components/page-title.js';
export const toAboutUsView = () => {
  return (
    renderPageTitle('About Us') +
    `<h4 class="text-center about-us-subtitle">Team 01</h4>
    <h3 class="text-center mt-15">Meet the legends who made this app possible 🚀</h3>
    <div class="members-container">
      <div class="member-card">
        <img src="/assets/img/dimitar.png" class="avatar__member-card"/>
        <div class="title__member-card">Dimitar Srabski</div>
      </div>
      <div class="member-card">
        <img src="/assets/img/plamen.png" class="avatar__member-card"/>
        <div class="title__member-card">Plamen Yordanov</div>
      </div>
    </div>
  `
  );
};
