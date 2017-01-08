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

		// 访问量
		$sql1 = "UPDATE article SET aVisit = aVisit+1 WHERE aId = 1";
		$result1 = $this->dataBaseHandle->IDA($sql1);

		// 文章内容
		$sql = "SELECT * FROM article";
		$result = $this->dataBaseHandle->fetchAll($sql);
		echo json_encode($result);
	}
}