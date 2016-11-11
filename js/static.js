var winwdth = "col-xs-9";
if (window.outerWidth <= 775){
    var winwdth = "col-xs-12";
}
angular.module('inform', []).controller('infoctrl', function($scope) {
    $scope.screenwidth = winwdth,
    $scope.ltc_date = "March 31st - April 2nd",
    $scope.ltc_location = "Desmond Hotel, Albany, NY",
    $scope.theme = "Unmasking Service - Masquerade",
    $scope.member_price = "$290 (four students per room)",
    $scope.double_adultprice = "$320 (two chaperones per room)",
    $scope.single_adultprice = "$640 (single room)",
    $scope.priority_deadline = "February 27th, 2017",
    $scope.online_deadline = "March 10th, 2017",
    $scope.payment_deadline = "March 17th, 2017",
    $scope.conference_email = "nydconference@gmail.com",
    $scope.questions = [
        {ques:' Q. How do I register an entire club?',ans:'A. When registering online, you must register the advisor/chaperone first. After you register a participant, please click “Add Another Person” until all of your participants are entered. “Please make sure to choose the correct category for each registrant (ie: Key Club Member or Advisor). This will ensure that you are billed correctly. Please also register your students in gender order, this helps with rooming.',ref:'a1',collapse:'collapse in'},
        {ques:' Q. How much does the conference cost?',ans:'A. The conference costs $290.00 per Key Club Member, and $320 per Key Club Advisor or Chaperone (single rooms available for $640). This includes all conference costs.',ref:'a2',collapse:'collapse'},
        {ques:' Q. Is there a deadline for Registration?',ans:'A. Yes. The preferred/guaranteed registration deadline is February 27th, 2017. The final deadline for registration is March 10th, 2017. All payment must be sent in immediately after completing the registration form.',ref:'a3',collapse:'collapse'},
        {ques:' Q. Why is the price online $3.95 less than the advertised price?',ans:'A. An administrative fee will be added on ($3.95 per person) to the total cost at the end of the registration form. All costs are as advertised.',ref:'a4',collapse:'collapse'},
        {ques:' Q. Do I have to register online?',ans:'A. Yes, all registration for the Leadership Training Conference must be completed online. The process is quick and easy!',ref:'a5',collapse:'collapse'},
        {ques:' Q. Do I have to give my student’s individual email addresses?',ans:'A. Yes, we do need all students’ individual information. This will only be used for distributing important information before the conference and to administer a survey after the conference is over.',ref:'a6',collapse:'collapse'},
        {ques:' Q. How do I make changes to my registration?',ans:'A. To make changes, you can log back onto the site and change information. When substituting attendees for other students, please only substitute a student for another student of the same gender.You can also email nydconference@gmail.com with any requested changes to your attendees or information. We will process the change and respond to you in a timely manner.',ref:'a7',collapse:'collapse'},
        {ques:' Q. Will my students be roomed together at the conference?',ans:'A. All students from the same club will be roomed in the same room and as close to one another as possible. The hotel will also place students near their listed faculty advisor/chaperone. If you wish to submit a rooming list, please email it to nydconference@gmail.com. Please also register your students in gender order, this helps with rooming.',ref:'a8',collapse:'collapse'},
        {ques:' Q. When do I pay for the conference?',ans:'A. Once you submit the online registration, you will receive a confirmation page. Please print this page out and mail it to the listed address along with payment. No registration or rooming will be confirmed until payment is received.',ref:'a9',collapse:'collapse'},
        {ques:' Q. Are there other forms that are required?',ans:'A. Yes, students must also bring copies of their Medical Release Form and Delegate Registration Form with them to the conference.',ref:'a10',collapse:'collapse'},
        {ques:' Q. How does my club submit for awards?',ans:'A. Those interested in being considered for awards should research available awards and criteria in the Awards Booklet, located on the LTC Website.',ref:'a11',collapse:'collapse'},
        {ques:' Q. My school administration requires an invoice, how can we receive one?',ans:'A. On your confirmation page, and in your confirmation email, you will see a link for “Invoice”. Contact nydconference@gmail.com if you have any problems finding this document. The LTC Website also has a W-9 if your school requires one for payment.',ref:'a12',collapse:'collapse'},
        {ques:' Q. Who should I ask if I have other questions?',ans:'A. All questions can be directed to nydconference@gmail.com. All questions will be answered in a timely manner.',ref:'a13',collapse:'collapse'}
    ];
});
