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
		
		if($request->getService()==$this->handle){	

			if($request->getConcrete()==$this->handleFirst){	

				// 显示所有书籍
				$this->getBook();
			}
		}
		elseif($this->successor!=NULL){

			// 传递给下一个
			$this->successor->handleRequest($request);
		}
	}

	public function getBook(){
		$sql = "SELECT iId,iBgLink,iName,iImage,iContent,iShow,iDate,iLike,cClass FROM bookinfor,bookclass WHERE iClass=cId";
		$result = $this->dataBaseHandle->fetchAll($sql);
		echo json_encode($result);
	}
}