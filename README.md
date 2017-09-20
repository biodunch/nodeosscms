# nodeosscms

Node Open Source School Content Management System

## features

* Attendance
* School Fee status
* Results
* Announcements

### Attendance

Parents / Guardians should be able to see at a glance the number of classes his/her child or ward has attended for the term, I am thinking data visualization showing the number of classes in the term and also the number of classes the student has attended.

### School Fee Status

At a glance the Parents/Guardians should be able to see how much they should pay, or any outstanding bills for the child. The principal and maybe the school accountant should also have access to these records. One to one relationship between the Parent and the Child. One to many relationship between the Principal or the accountant and all the students in the school.
Results
Parents should be able to see results of their kids, I am not talking of only end of term results but also quizzes, tests etc. These should be available to the parents once they are marked, even though the term has not come to an end yet. One to many relationship between the Teachers and each student they teach, additionally one to one relationship between the child and parent. We can debate about permissions later, (i.e.) who gets to decide when and how the results get to the Parents/Guardians, is it going to be the Teachers, Heads of Departments or the Principal of the school or the VP Admin.


### Announcements

We should facilitate the sending of any relevant information that the school would like the Parents to know and vice-versa. The communication should be both ways so all parties can work hand in hand towards the child’s academic development. That being said, I am thinking built in support for Emails, Bulk SMS.  (I still have an API key for sending text messages through node. I used it for my final year project, I still have about 15 messages, and we could use it to test).
Parents should get an email immediately anything important that concerns the child happens e.g.

* When results are in
* When the child is sick
* Breaks one or more of the school rules
* Visiting Day or Open day etc.

We should be able to cater for both Boarding and Day students. Look through this draft and feel free to add anything you think is essential that I might have left out or didn’t elaborate on.
