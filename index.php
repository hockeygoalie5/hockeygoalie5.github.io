<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Mustafa Kalash</title>
        <meta name="description" content="Online portfolio for Mustafa Kalash, a web developer, software developer, and student."/>
        <meta name="keywords" content="Mustafa, Kalash, development, web, portfolio, student, software"/>
        <meta name="author" content="Mustafa Kalash"/>
        <link rel="shortcut icon" href="favicon.ico"/>
        <link rel="stylesheet" type="text/css" href="style.css"/>
        <script>
			(function(i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r;
				i[r] = i[r] ||
				function() {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date();
				a = s.createElement(o),
				m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m)
			})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
			ga('create', 'UA-52477466-1', 'auto');
			ga('send', 'pageview');
        </script>
    </head>
    <body>
        <header id="header">
            <h1>Mustafa Kalash</h1>
            <h5>Web developer, software developer, student</h5>
        </header>
        <section class="page" id="about">
            <h1>About Me</h1>
            <img id="avatar" src="images/avatar.jpg" alt="Profile Picture"/>
            <p>I am currently 19-years-old and a freshman at The Ohio State University, majoring in Computer Science and Engineering. I have been learning software development for more than 11 years. Throughout those years, I taken on several freelance software and web development jobs - anything from simple web pages to enterprise software. The following are choice languages and tools over which I have a strong understanding.</p>
            <ul>
                <li class="green">Java</li>
                <li class="green">HTML</li>
                <li class="green">CSS</li>
                <li class="green">PHP</li>
                <li class="green">JavaScript</li>
                <li class="green">SQL</li>
                <li class="green">C#</li>
                <li class="green">Subversion</li>
                <li class="green">Git</li>
                <li class="green">Shell/SSH</li>
                <li class="green">Python</li>
                <li class="green">FTP/SFTP</li>
            </ul>
            <p>In high school, I participated in a competition engineering team, building and competing with <a href="https://en.wikipedia.org/wiki/Trebuchet">trebuchets</a> in both distance and accuracy, <a href="http://www.vexrobotics.com/vex?ref=hometile">Vex robots</a>, and a car for the <a href="http://www.soapboxderby.org/">All-American Soap Box Derby</a>; as well as serving as a club officer. My senior year brought my most proud moments. While I did not compete with trebuchets, I did build a <a href="https://en.wikipedia.org/wiki/Ballista">ballista</a> (watch our <a href="http://www.mkalash.com/ballista.webm">first test fire</a>! My friend's reaction shows our excitement perfectly - "totally made a ballista!") My robotics team now holds the claim of being the first team in our region to qualify for the states competition, where we made it to the quarter finals! And, for the first time ever, we finished in first place at the All-American Soap Box Derby's big Derby Downs race! While I've now graduated and I can no longer complete, my work still isn't done. I'm back with the team, but now as an assistant coach! This year, I plan to help lead the team beyond the standards I set while I was a part of it. Over on the "next page" I've got a tiny collection of some work of which I've managed to save a record (in hindsight, should've done a better job of that,) so check that out. Beyond that, there's a nifty contact form if you need to get a hold of me. Thanks!</p>
        </section>
        <section class="page" id="work">
            <h1>Portfolio</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Link(s)</th>
                    </tr>
                </thead>
                <tbody>
                	<tr>
                		<td>Chatty (2012)</td>
                		<td>An experiment in Java to learn networking (sending/receiving packets.) Chatty is a simple, incomplete direct message client.</td>
                		<td><a href="https://github.com/hockeygoalie5/Chatty">GitHub Repository</a></td>
                	</tr>
                    <tr>
                        <td>Door (2013)</td>
                        <td>A game made for the Ludum Dare 48 Hour Compo.</td>
                        <td><a href="http://ludumdare.com/compo/ludum-dare-26/?action=preview&uid=6528">Ludum Dare Page</a><br/><a href="ld26/">Downloads</a></td>
                    </tr>
                    <tr>
                    	<td>Baystation 12 (2014 - Present)</td>
                    	<td>Baystation 12 is a major code base for the <a href="http://www.byond.com/">BYOND</a> game Space Station 13, and a project to which I contribute.</td>
                    	<td><a href="https://github.com/Baystation12/Baystation12">GitHub Repository</a></td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section class="page" id="contact">
            <h1>Contact Me</h1>
            <form action="#contact" id="form" method="post" autocomplete="on">
                <table id="contactForm">
                    <caption>
                    	<?
							if ($_POST["submit"] <> '') {
								if ($_POST["subject"] && $_POST["email"] && $_POST["message"] && $_POST["name"]) {
									$ToEmail = 'me@mkalash.com';
									$EmailSubject = $_POST["subject"];
									$mailheader = "From: " . $_POST["email"] . "\r\n";
									$mailheader .= "Reply-To: " . $_POST["email"] . "\r\n";
									$mailheader .= "Content-type: text/html;charset=iso-8859-1\r\n";
									$MESSAGE_BODY = $_POST["name"];
									if ($_POST["company"]) {
										$MESSAGE_BODY .= ", " . $_POST["company"];
									}
									$MESSAGE_BODY .= "<br/><br/>" . nl2br($_POST["message"]);
									mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die("ERROR");
									echo 'Thank you for your interest. Please give up to 24 hours for a reply.<br/>';
								} else {
									echo 'Some fields were left blank! Please be sure all fields are filled out correctly, then try again.<br/>';
								}
							}
                        ?>
                    </caption>
                    <tr>
                        <th><label for="name">Name</label></th>
                        <th><label for="subject">Subject</label></th>
                    </tr>
                    <tr>
                        <td><input required type="text" id="name" name="name"/></td>
                        <td><input required type="text" id="subject" name="subject"/></td>
                    </tr>
                    <tr>
                        <th><label for="email">Email</label></th>
                        <th><label for="company">Company</label></th>
                    </tr>
                    <tr>
                        <td><input required type="email" id="email" name="email"/></td>
                        <td><input type="text" id="company" name="company"/></td>
                    </tr>
                    <tr>
                        <th colspan="2"><label for="message">Message</label></th>
                    </tr>
                    <tr>
                        <td colspan="2"><textarea name="message" id="message" required></textarea></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input name="submit" type="submit" id="submit" value="Submit"/></td>
                    </tr>
                </table>
            </form>
        </section>
        <footer id="footer">
            <p id="fp">Copyright &copy; <? echo date('Y'); ?> Mustafa Kalash</p>
        </footer>
        <nav>
            <ul id="nav">
                <li class="navItem"><a href="#about">About Me</a></li>
                <li class="navItem"><a href="#work">Portfolio</a></li>
                <li class="navItem"><a href="#contact">Contact</a></li>
                <li class="navItem"><a href="http://www.linkedin.com/profile/view?id=116961775">LinkedIn</a></li>
            </ul>
        </nav>
    </body>
</html>