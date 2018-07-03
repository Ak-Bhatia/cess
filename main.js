var skill = document.querySelector('#skilled');
var team = document.querySelector('#team');
var member = document.querySelector('#member');
var proj = document.querySelector('#proj');


skill.addEventListener("mouseover",function(){
  this.innerHTML = '<br><br><br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp We focus on Skill development,we organise sessions,flash classes for students that help in enhancing their skills.';
});


skill.addEventListener("mouseout",function(){
  this.innerHTML = '<img class="img1" src="images/computer.png"><h2 class="head1">Skill Development</h2>';
});


team.addEventListener("mouseover",function(){
  this.innerHTML = '<br><br><br> &nbsp &nbsp &nbsp We work in teams for <br>successful fulfillation of various jobs,we here at CESS have Technical, Literary, Placement, Promotion, Web Dev Teams.';
});


team.addEventListener("mouseout",function(){
  this.innerHTML = '<h1 class="head2">Team Work</h1><img class="img2" src="images/teamwork.svg">';
});


member.addEventListener("mouseover",function(){
  this.innerHTML = '<br><br><br> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp We have over 300 members in &nbsp &nbsp &nbsp &nbsp CESS.All the volunteers and members are categorized into <br> various teams.';
});


member.addEventListener("mouseout",function(){
  this.innerHTML = '<img class="img1" src="images/user.svg"><h1 class="head1"">Members</h1>';
});

proj.addEventListener("mouseover",function(){
  this.innerHTML = '<br><br><br> We undertake projects and <br> we have gone quite a far <br> in terms of projects and achievements.';
});


proj.addEventListener("mouseout",function(){
  this.innerHTML = '<h2 class="head2">Projects and Achievements</h2><img class="img2" src="images/presentation.svg">';
});
