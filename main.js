var skill = document.querySelector('#skilled');
var team = document.querySelector('#team');

skill.addEventListener("mouseover",function(){
  this.innerHTML = 'We focus on Skill development,we organise sessions,flash classes for students that help in enhancing their skills.';
});


skill.addEventListener("mouseout",function(){
  this.innerHTML = '<img class="img1" src="images/computer.png"><h2 class="head1">Skill Development</h2>';
});


team.addEventListener("mouseover",function(){
  this.innerHTML = 'We work in teams for successful fulfillation of various jobs,we here at CESS have Technical, Literary, Placement, Promotion, Web Dev Teams.';
});


team.addEventListener("mouseout",function(){
  this.innerHTML = '<h1 class="head2">Team Work</h1><img class="img2" src="images/teamwork.svg">';
});


member.addEventListener("mouseover",function(){
  this.innerHTML = 'We have over 300 members in CESS.All the volunteers and members are categorized into various teams.';
});


member.addEventListener("mouseout",function(){
  this.innerHTML = '<img class="img1" src="images/user.svg"><h1 class="head1"">Members</h1>';
});

proj.addEventListener("mouseover",function(){
  this.innerHTML = 'We undertake projects and we have gone quite a far in terms of achievements.';
});


proj.addEventListener("mouseout",function(){
  this.innerHTML = '<h2 class="head2">Projects and Achievements</h2><img class="img2" src="images/presentation.svg">';
});
