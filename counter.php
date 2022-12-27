<!doctype php>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
<link href="../../../Unnamed Site 2/index.css" rel="stylesheet" type="text/css">
</head>

<body><?php  $file='counter.txt';  $read=file_get_contents($file);  $open=fopen($file,'w');  $read++;  $write=fwrite($open, $read);  fclose($open);  echo 'Number of visitors: '.$read;?>
</body>
</html>