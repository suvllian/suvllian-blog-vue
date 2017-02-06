<?php
header('Content-Type:application/json');

class Image extends Handler 
{
	public function setSuccessor($nextService)
	{
		$this->successor = $nextService;
	}

	public function handleRequest($request)
	{
		// 数据库操作句柄
		$this->dataBaseHandle = $request->getDataBaseHandle();

		$this->handle = "image";

		$this->handleFirst  = "getImage";
		$this->handleSecond = "voteImage";
		
		if($request->getService()==$this->handle){	

			// 处理具体需求
			if($request->getConcrete()==$this->handleFirst){	

				// 显示图片
				$this->getImage();
			}
			elseif($request->getConcrete()==$this->handleSecond){

				// 投票
				$this->voteImage();
			}
		}
		elseif($this->successor!=NULL){

			// 传递给下一个
			$this->successor->handleRequest($request);
		}
	}

	public function getImage(){
		$page = 1;
		if(!empty($_GET['page'])){
			$page = $_GET['page'] - 0;
		}
		
		$pageNumber = ($page-1)*15;
		$sql = "SELECT * FROM travelImage WHERE iShow=1 LIMIT ".$pageNumber.",15";
		$result = $this->dataBaseHandle->fetchAll($sql);
		echo json_encode($result);
	}

	public function voteImage(){

		// 接收到的参数
		$way = trim($_POST['way']);
		$id   = trim($_POST['id']);

		// 如果收到的投票作品ID为空，则不做处理
		if(empty($id)||empty($way)){
			exit();
		}

		// 根据get传参进行操作
		if($way === "add"){
			$sql = "UPDATE travelImage SET iLike = iLike +1 WHERE iId=".$id;
			$result = $this->dataBaseHandle->query($sql);	
		}else if($way === "sub"){
			$sql = "UPDATE travelImage SET iLike = iLike - 1 WHERE iId=".$id;
			$result = $this->dataBaseHandle->query($sql);
		}
	}
}