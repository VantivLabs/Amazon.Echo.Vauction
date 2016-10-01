<?php
	//read file into json array
	$lotsfile = fopen("lots.json", "r") or die("Unable to open file!");
	$lots = fread($lotsfile, filesize("lots.json"));
	//echo $lots;
	fclose($lotsfile);

	//append new entry and write out file
	if(!isset($_GET['name'])) die ("Need to pass in query param 'name'");
	$newentry['name'] = $_GET['name'];
	if(!isset($_GET['time-remaining'])) die ("Need to pass in query param 'time-remaining'");
	$newentry['timeremaining'] = $_GET['time-remaining'];
	if(!isset($_GET['lot-id'])) die ("Need to pass in query param 'lot-id'");
	$newentry['lotid'] = $_GET['lot-id'];
	if(!isset($_GET['description'])) die ("Need to pass in query param 'description'");
	$newentry['description'] = $_GET['description'];
	if(!isset($_GET['starting-bid'])) die ("Need to pass in query param 'starting-bid'");
	$newentry['startingbid'] = $_GET['starting-bid'];
	if(!isset($_GET['buyout'])) die ("Need to pass in query param 'buyout'");
	$newentry['buyout'] = $_GET['buyout'];
	if(!isset($_GET['image'])) die ("Need to pass in query param 'image'");
	$newentry['image'] = $_GET['image'];

	$jsonlots = json_decode($lots, true);
	array_push($jsonlots['items'], $newentry);
	echo "";
	$newlots = json_encode($jsonlots);

	//write new json to file
	$lotsfile = fopen("lots.json", "w") or die("Unable to open file!");
	fwrite($lotsfile, $newlots);
?>
