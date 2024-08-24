<?php 
if($_SERVER['REQUEST_METHOD']=="POST") {
    session_start();
	if(empty($_POST["captcha"]) || $_SESSION["code"]!=$_POST["captcha"]){?>
    	<script> alert('Wrong Captcha Entered'); window.history.back(); </script>
    <? exit; }

 unset($_POST['captcha']);
 $site_name="MAD School.";
 $site_url="https://www.madschool.in/";
   $master_mail="madschoolgroup@gmail.com,".$_POST['email'] ;
	$bcc_mail="binod@bitragroup.com";
   $dev_mail="binod@bitragroup.com,info@bitragroup.com";
   $mailto = $master_mail;
   


 $message=$site_name." - requsest for Classes Message Details";
 
        $mail_body = "<style type='text/css'>
		body,td,th { font-family: Verdana; font-size:12px; color:#333333; }
		.borblue{ border-bottom: 2px solid #CCCCCC; }
		.topblue{ border-top: 2px solid #CCCCCC; }
		.textfont{ font-family:Verdana; font-size:13px; color:#000000; padding-left:10px; line-height:25px;}
		.givendata{ font-family:Verdana; font-size:12px; font-size:bold; color:#ffffff;}
		.tdbg{ background-color:#44AFD5; }
		.heading{ color:#5C5C5C; background-color:#F2FBFF; font-size:12px;padding-left:8px;}
		.color{ color:black;}
		</style>

		<table width='600' border='0' align='center' cellpadding='0' cellspacing='0'>
		  <tr>
		    <td colspan='2' align='left' valign='top'><a href='https://www.madschool.in'><img src='https://www.madschool.in/images/LOGO-3-1.png' border='0'></a></td>
	      </tr>
		  <tr>
		    <td colspan='2' align='center' valign='top'>  
			<table width='600'  border='0' align='center' cellpadding='3' cellspacing='0' class='borblue'>
			  <tr bgcolor='#0099CC' height='30'>
				<td colspan='3' align='left' valign='middle' bgcolor='#abb7bb' style='color:#fff; font:bold 14px Verdana, Arial, Helvetica, sans-serif'></td>
			  </tr>
			  <tr>
				<td width='30%' align='left'  class='textfont'>Name</td>
				<td width='5%' align='center'><strong>:</strong></td>
				<td align='left' class='color'>".$_POST['name']."</td>
			  </tr>
			  <tr>
				<td align='left'  class='textfont'>E-Mail</td>
				<td align='center'><strong>:</strong></td>
				<td align='left' class='color'>".$_POST['email']."</td>
			  </tr>			  
			  <tr>
				<td align='left'  class='textfont'>Phone</td>
				<td align='center'><strong>:</strong></td>
				<td align='left' class='color'>".$_POST['phone']."</td>
			  </tr>
              <tr>
				<td align='left'  class='textfont'>City/town/state</td>
				<td align='center'><strong>:</strong></td>
				<td align='left' class='color'>".$_POST['city']."</td>
			  </tr>
              <tr>
				<td align='left'  class='textfont'>Course</td>
				<td align='center'><strong>:</strong></td>
				<td align='left' class='color'>".$_POST['course']."</td>
			  </tr>
              <tr>
                <td align='left'  class='textfont'>Message</td>
			    <td align='center'><strong>:</strong></td>
			    <td align='left' class='color'>".$_POST['message']."</td>
		      </tr>
			  </table></td>
		  </tr>
		</table>";
       // echo $message; exit;   
    
    
       $mailheader = 'MIME-Version: 1.0' . "\r\n";
       $mailheader.= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
       //$mailheader.="From: ".$txt_name." <".$master_mail.">\r\n";
       $mailheader.="From: ".$_POST['name']."<".$_POST['email'].">\r\n";
       $mailheader.="Reply-To: ".$_POST['email']. "\r\n";
       if(!empty($bcc_mail)) { $mailheader.= 'Bcc: '.$bcc_mail."\r\n"; }
       @mail($mailto,$message,$mail_body,$mailheader, '-f madschoolgroup@gmail.com');
	   header("location:success.php");

}
?>