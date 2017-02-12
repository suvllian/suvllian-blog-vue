<?php
header('Content-Type:application/json');

class Article extends Handler 
{
	public function setSuccessor($nextService)
	{
		$this->successor = $nextService;
	}

	public function handleRequest($request)
	{
		// 数据库操作句柄
		$this->dataBaseHandle = $request->getDataBaseHandle();

		$this->handle = "article";

		$this->handleFirst  = "getContent";
		$this->handleSecond = "getList";
		$this->handleThird  = "getPreNext";
		
		if($request->getService()==$this->handle){	

			if($request->getConcrete()==$this->handleFirst){	

				// 得到一篇文章所有信息
				$this->getContent();
			}
			elseif ($request->getConcrete()==$this->handleSecond) {
				
				// 得到一篇文章列表
				$this->getList();
			}
			elseif ($request->getConcrete()==$this->handleThird) {
				
				// 得到上一篇下一篇
				$this->getPreNext();
			}
		}
		elseif($this->successor!=NULL){

			// 传递给下一个
			$this->successor->handleRequest($request);
		}
	}

	public function getContent(){
		$id = 1;
		if(!empty($_GET['id'])){
			$id = $_GET['id'] - 0;
		}
		// 访问量
		$sql1 = "UPDATE article SET aVisit = aVisit+1 WHERE aId = $id";
		$result1 = $this->dataBaseHandle->IDA($sql1);

		// 文章内容
		$sql = "SELECT aContent, aDate, article.aId, aImage, aIntro, aTopic, aVisit, aClassName FROM article,articleclass WHERE article.aClass = articleclass.aId AND article.aId = $id";
		$result = $this->dataBaseHandle->fetchAll($sql);
		echo json_encode($result);
	}

	public function getList(){
		// 文章列表
		$page = 1;
		if(!empty($_GET['page'])){
			$page = $_GET['page'] - 0;
		}
		
		$pageNumber = ($page - 1) * 5;

		$sql = "SELECT aDate,article.aId, aImage, aIntro, aTopic, aVisit, aClassName FROM article,articleclass WHERE article.aClass = articleclass.aId ORDER BY article.aDate DESC LIMIT $pageNumber, 5";
		$result = $this->dataBaseHandle->fetchAll($sql);
		echo json_encode($result);
	}

	public function getPreNext(){
		if (!empty($_GET['id'])){ 
			$id = $_GET['id'] - 0;
		
			$sql = "SELECT aDate FROM article WHERE aId=$id";
			$time = $this->dataBaseHandle->fetchOne($sql);
			$time = $time["aDate"];

			// 上一篇
			$sql = "SELECT aId, aTopic FROM article WHERE aDate < $time ORDER BY aDate DESC LIMIT 0,1";
			$result[0] = $this->dataBaseHandle->fetchAll($sql);
			// 下一篇
			$sql = "SELECT aId, aTopic FROM article WHERE aDate > $time ORDER BY aDate ASC LIMIT 0,1";
			$result[1] = $this->dataBaseHandle->fetchAll($sql);

			$result = array('prev'=>$result[0], 'next'=>$result[1]);
			echo json_encode($result);
		} else{
			$result = Array();
			echo json_encode($result);
		}	
	}
}