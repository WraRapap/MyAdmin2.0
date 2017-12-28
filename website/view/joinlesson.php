<div class = "join-lesson_container" ng-controller="JoinLessonController">
  <div class="join-lesson_mainBg"></div>
  <div class="join-lesson_mainPic">
    <div>
      <hr class="hrStyle">
      <p class="title_XLarge">課程報名</p>
      <hr class="hrStyle">
    </div>
  </div>
  <div class="join-lesson_content">
    <div class="join-lesson_content_wrap">
      <div class = "join-lesson_form">
        <form ng-submit = "normalJoin()" >
          <input id="firstname" name="name" placeholder="姓名" type="text" required="" ng-model="name">
          <input id="lastname" name="name" placeholder="聯絡電話" type="text" required="" ng-model="phone">
          <input id="email" name="email" placeholder="Email" type="text" required="" ng-model="email">
          <!-- selected value as key(str)-->
          <select ng-model="lesson" 
			            ng-options="a.key as a.value for a in actions">
            <option value="">選擇課程</option>
          </select>
          <textarea id="messagge" name="messagge" placeholder="留言(200字以內)" required ng-model="message"></textarea>
          <button type="submit">馬上報名</button>
        </form>
      </div>
    </div>
  </div>
</div>
