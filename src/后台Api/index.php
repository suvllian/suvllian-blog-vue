<?php
header('Access-Control-Allow-Origin:*');   
header('Access-Control-Allow-Headers:x-requested-with,content-type');  

function __autoload($ClassName)
{
	include $ClassName.".php";
}

class Client
{
	private $queryNow;
	private $doType;

	public function __construct()
	{
		// 判断请求类型
		if(isset($_POST["do"])){
			$this->doType = addslashes(trim($_POST["do"]));
			$this->doConcrete = addslashes(trim($_POST["concrete"]));
		}else if(isset($_GET["do"])){
			$this->doType = addslashes(trim($_GET["do"]));
			$this->doConcrete = addslashes(trim($_GET["concrete"]));
		}else{
			return false;
		}

		if (isset($this->doType)) {
			$this->query    = $this->doType;
			$this->concrete = $this->doConcrete;
		}

		$image = new Image();
		$book  = new Book();
		$article  = new Article();

		// // 设置后继
		$image->setSuccessor($book);
		$book->setSuccessor($article);
	
		// 生成处理器加载请求
		$LoadUp = new Request($this->query,$this->concrete);
		$image->handleRequest($LoadUp);
	}
}

$MakeRequest = new Client();