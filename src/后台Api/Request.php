<?php
require_once("./db.class.php"); 

class Request
{
	private $Value;
	private $dataBaseHandle;

	public function __construct($service,$concrete)
	{
		$this->Value   = $service;
		$this->Concrete = $concrete;
	}

	public function getService()
	{
		return $this->Value;
	}

	public function getConcrete(){
		return $this->Concrete;
	}

	public function getDataBaseHandle(){
		$this->dataBaseHandle = new DB("localhost","root","","suvllian","utf8");
		return $this->dataBaseHandle;
	}
}