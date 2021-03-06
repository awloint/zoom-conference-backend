const htmlBody = (firstName, lastName) => {
  return `<table style='background-color: #d5d5d5;' border='0' width='100%' cellspacing='0'>
        <tbody>
        <tr>
        <td>
        <table style='font-family: Helvetica,Arial,sans-serif; background-color: #fff; margin-top: 40px; margin-bottom: 40px;' border='0' width='600' cellspacing='0' cellpadding='0' align='center'>
        <tbody>
        <tr>
        <td style='padding-top: 40px; padding-right: 40px; padding-bottom: 15px;' colspan='2'>
        <p style='text-align: right;'><a href='https://awlo.org'><img src='http://awlo.org/email/awlo_lg.png' alt='African Women in Leadership Organisation' width='20%' border='0' /></a></p>
        </td>
        </tr>
        <tr>
        <td style='padding-right: 40px; text-align: right;' colspan='2'></td>
        </tr>
        <tr>
        <td style='color: #000; font-size: 12pt; font-family: Helvetica; font-weight: normal; line-height: 15pt; padding: 40px 40px 80px 40px;' colspan='2' valign='top'>Dear ${firstName} ${lastName},
        <p>Thank you for registering for AWLO International Day of the Girl Child Webinar.
        </p>
        <p>Join our Keynote Speaker, Mrs. Oyeyimika Adeboye; the first female Managing Director of Cadbury Nigeria, and our youth leaders globally, as we mark 2020 International Day of the Girl Child (IDG).</p>
        <p>Did you know that the journey of an equal world for women has been unfolding better and better? So let's toast to our greatness, as we mark another IDG.</p>
        <p>It is one for highlighting issues of girls and women's empowerment, and the rights of women and girls. And this year's IDG theme is <strong>My Voice, Our Equal Future</strong></p>
        <p>
        Join the event via: <a href='https://zoom.us/j/95359142264?pwd=MmhmdzFpZDZLTXhpOUMyYWJ0UUhRdz09'>https://zoom.us/j/95359142264?pwd=MmhmdzFpZDZLTXhpOUMyYWJ0UUhRdz09</a> <br>
        <strong>Meeting ID:</strong>953 5914 2264 <br>
        <strong>Password:</strong> 635446
        <Strong>Time:</Strong> Oct 11, 2020 06:00 PM (Nigerian time) <br>
        </p>
        <p>Best regards!</p>
        </td>
        </tr>
        <tr>
        <td style='border-top: 5px solid #940000; height: 10px; font-size: 7pt;' colspan='2' valign='top'><span>&nbsp;</span></td>
        </tr>
        <tr style='text-align: center;'>
        <td id='s1' style='padding-left: 20px;' valign='top'><span style='text-align: center; color: #333; font-size: 12pt;'><strong>AWLO Correspondence Team</strong></span><span style='color: #cccccc; font-size: x-large;'>&nbsp;|&nbsp;</span><span style='text-align: left; color: #333; font-size: 11pt; font-weight: normal;'>International Headquarters</span></td>
        </tr>
        <tr style='text-align: center; padding-left: 40px; padding-right: 40px; padding-bottom: 0;'>
        <td colspan='2' valign='top'><span style='color: #333; font-size: 8pt; font-weight: normal; line-height: 17pt; padding-left: 40px; padding-right: 40px;'>African Women in Leadership Organisation<br /><strong>International Headquarters:</strong> 6, Alhaji Bankole Crescent, Ikeja, Lagos - Nigeria<br />tel: +2347066819910 &nbsp;|&nbsp; mobile: +2348066285116 &nbsp;|&nbsp; +2348087719510<br /><strong>USA:</strong> 60 4800 Duval Point Way SW, Snellville, GA 30039, USA.<br />tel: +1 404-518-8194 &nbsp;| <span>+1 505-547-0528</span>&nbsp;&nbsp;<br /><strong>South Africa:</strong>&nbsp;Newlands Shopping Centre CNR. Dely Road/Lois Road, <br />1st Floor, Suite 104, Newlands, Pretoria, South Africa<br />tel: +27-845-105871<br /><strong>email:&nbsp;</strong>info@awlo.org &nbsp;|&nbsp; <strong>www.awlo.org</strong></span>
        <p><a href='http://twitter.com/awloint'><img src='http://awlo.org/email/social/twitter_circle_color-20.png' width='20px' height='20px' /></a><a href='http://facebook.com/awloint'><img src='http://awlo.org/email/social/facebook_circle_color-20.png' width='20px' height='20px' /></a><a href='https://plus.google.com/103912934440599693779'><img src='http://awlo.org/email/social/google_circle_color-20.png' width='20px' height='20px' /></a><a href='http://linkedin.com/company/awloint'><img src='http://awlo.org/email/social/linkedin_circle_color-20.png' width='20px' height='20px' /></a><a href='http://instagram.com/awloint'><img src='http://awlo.org/email/social/instagram_circle_color-20.png' width='20px' height='20px' /></a><a href='https://www.youtube.com/channel/UCevvBafqeTjY16qd2gbceJw'><img src='http://awlo.org/email/social/youtube_circle_color-20.png' width='20px' height='20px' /></a></p>
        </td>
        </tr>
        <tr>
        <td id='s3' style='padding-left: 20px; padding-right: 20px;' colspan='2' valign='bottom'>
        <p style='font-family: Helvetica, sans-serif; text-align: center; font-size: 12px; line-height: 21px; color: #333;'><span style='margin-left: 4px;'><span style='opacity: 0.4; color: #333; font-size: 9px;'>Disclaimer: This message and any files transmitted with it are confidential and privileged. If you have received it in error, please notify the sender by return e-mail and delete this message from your system. If you are not the intended recipient you are hereby notified that any dissemination, copy or disclosure of this e-mail is strictly prohibited.</span></span></p>
        </td>
        </tr>
        <tr>
        <td style='border-bottom: 5px solid #940000; height: 5px; font-size: 7pt;' colspan='2' valign='top'>&nbsp;</td>
        </tr>
        </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>`
}

const textBody = (firstName, lastName) => {
  return `
    Dear ${firstName} ${lastName},
    Thank you for registering for AWLO International Day of the Girl Child Webinar.
    Join our Keynote Speaker, Mrs. Oyeyimika Adeboye; the first female Managing Director of Cadbury Nigeria, and our youth leaders globally, as we mark 2020 International Day of the Girl Child (IDG).
    Did you know that the journey of an equal world for women has been unfolding better and better? So let's toast to our greatness, as we mark another IDG.
    It is one for highlighting issues of girls and women's empowerment, and the rights of women and girls. And this year's IDG theme is My Voice, Our Equal Future
    Join Zoom Event via: https://zoom.us/j/95359142264?pwd=MmhmdzFpZDZLTXhpOUMyYWJ0UUhRdz09
    Time: Oct 11, 2020 06:00 PM (Nigerian time)
    Meeting ID: 953 5914 2264
    Passcode: 635446
    Best regards!
    `
}

module.exports = { htmlBody, textBody }
