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
		$this->handleSecond  = "getList";
		
		if($request->getService()==$this->handle){	

			if($request->getConcrete()==$this->handleFirst){	

				// 得到一篇文章所有信息
				$this->getContent();
			}
			elseif ($request->getConcrete()==$this->handleSecond) {
				
				// 得到一篇文章列表
				$this->getList();
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
		// 文章内容
		$sql = "SELECT aDate,article.aId, aImage, aIntro, aTopic, aVisit, aClassName FROM article,articleclass WHERE article.aClass = articleclass.aId ORDER BY article.aDate DESC";
		$result = $this->dataBaseHandle->fetchAll($sql);
		echo json_encode($result);
	}
}