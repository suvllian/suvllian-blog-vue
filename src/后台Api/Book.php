<?php
header('Content-Type:application/json');

class Book extends Handler 
{
	public function setSuccessor($nextService)
	{
		$this->successor = $nextService;
	}

	public function handleRequest($request)
	{
		// 数据库操作句柄
		$this->dataBaseHandle = $request->getDataBaseHandle();

		$this->handle = "book";

		$this->handleFirst  = "getBook";
		$this->handleSecond = "voteBook";
		
		if($request->getService()==$this->handle){	

			if($request->getConcrete()==$this->handleFirst){	

				// 显示所有书籍
				$this->getBook();
			} elseif ($request->getConcrete()==$this->handleSecond) {

				// 投票
				$this->voteBook();
			}
		}
		elseif($this->successor!=NULL){

			// 传递给下一个
			$this->successor->handleRequest($request);
		}
	}

	public function getBook(){
		$page = 1;
		if(!empty($_GET['page'])){
			$page = $_GET['page'] - 0;
		}
		
		$pageNumber = ($page - 1) * 10;

		$sql = "SELECT iId,iBgLink,iName,iImage,iContent,iShow,iDate,iLike,cClass FROM bookinfor,bookclass WHERE iClass=cId AND iShow=1 LIMIT $pageNumber, 10";
		$result = $this->dataBaseHandle->fetchAll($sql);
		echo json_encode($result);
	}

	public function voteBook(){

		// 接收到的参数
		$way = trim($_POST['way']);
		$id   = trim($_POST['id']);

		// 如果收到的投票作品ID为空，则不做处理
		if(empty($id)||empty($way)){
			exit();
		}

		// 根据get传参进行操作
		if($way === "add"){
			$sql = "UPDATE bookinfor SET iLike = iLike +1 WHERE iId=".$id;
			$result = $this->dataBaseHandle->query($sql);	
		}else if($way === "sub"){
			$sql = "UPDATE bookinfor SET iLike = iLike - 1 WHERE iId=".$id;
			$result = $this->dataBaseHandle->query($sql);
		}
	}

}