<?php
class Action_Widget extends WidgetController{
	public function main(){

		// 如設定有分類層數，則優先進入分類層
		if(isset($this -> widgetMeta -> class_level) && $this -> widgetMeta -> class_level > 0){
			$this -> classRows();
		}
		// 如無分類層數，直接進入項目層
		else{
			$this -> rows();
		}
	}

	public function classRows(){

		$objects = $this -> widgetModel_data -> getClasses();
		if($objects == "items"){
			$this -> rows();
		}
		else{

			$this -> loadView("class_rows", array(
				"metas" => $this -> widgetModel_meta -> getClassMeta(),
				"data" => $objects,
				"navigation" => $this -> widgetModel_data -> getNavigation()
			));
		}
		
	}

	public function classEdit(){
		$this -> loadView("class_edit", array(
			"metas" => $this -> widgetModel_meta -> getClassMeta(),
			"data" => $this -> widgetModel_data -> getClass(),
			"navigation" => $this -> widgetModel_data -> getNavigation(),
			"parentID" => $this -> tool_io -> post("parentID")
		));
	}

	public function classSort(){
		$objects = $this -> widgetModel_data -> getClasses();
		$this -> loadView("class_sort", array(
			"metas" => $this -> widgetModel_meta -> getClassMeta(),
			"data" => $objects,
			"navigation" => $this -> widgetModel_data -> getNavigation()
		));
	}

	public function classSortSave(){
		$this -> widgetModel_data -> saveSortClass();
		$this -> tool_go -> back(2);
	}

	public function classSave(){
		$this -> widgetModel_data -> saveClass();
		$this -> tool_go -> back(2);
	}

	public function classDelete(){
		$this -> widgetModel_data -> deleteClass();
		$this -> tool_go -> back(1);
	}

	public function classBatchDelete(){
		$this -> widgetModel_data -> batchDeleteClass();
		$this -> tool_go -> back(1);
	}

	public function classBatchPublish(){
		$this -> widgetModel_data -> batchPublishClass();
		$this -> tool_go -> back(1);
	}

	public function classBatchUnPublish(){
		$this -> widgetModel_data -> batchUnPublishClass();
		$this -> tool_go -> back(1);
	}

	public function classBack(){
		$this -> tool_go -> back(2);
	}

	public function rows(){
		$this -> loadView("rows", array(
			"metas" => $this -> widgetModel_meta -> getItemMeta(),
			"searchMetas" => $this -> widgetModel_meta -> getSearchMeta(),
			"data" => $this -> widgetModel_data -> getItems(),
			"navigation" => $this -> widgetModel_data -> getNavigation()
		));
	}

	public function edit(){
		$this -> loadView("edit", array(
			"metas" => $this -> widgetModel_meta -> getItemMeta(),
			"data" => $this -> widgetModel_data -> getItem(),
			"navigation" => $this -> widgetModel_data -> getNavigation(true),
			"parentID" => $this -> tool_io -> post("parentID"),

		));
	}

	public function search(){
		$this -> loadView("search", array(
			"metas" => $this -> widgetModel_meta -> getItemMeta(),
			"searchMetas" => $this -> widgetModel_meta -> getSearchMeta(),
			"data" => $this -> widgetModel_data -> getSearchItems(),
			"navigation" => $this -> widgetModel_data -> getNavigation(true)
		));
	}

	public function delete(){
		$this -> widgetModel_data -> delete();
		$this -> tool_go -> back(1);
	}

	public function batchDelete(){
		$this -> widgetModel_data -> batchDelete();
		$this -> tool_go -> back(1);
	}

	public function batchPublish(){
		$this -> widgetModel_data -> batchPublish();
		$this -> tool_go -> back(1);
	}

	public function batchUnPublish(){
		$this -> widgetModel_data -> batchUnPublish();
		$this -> tool_go -> back(1);
	}

	public function sort(){
		$this -> loadView("sort", array(
			"metas" => $this -> widgetModel_meta -> getItemMeta(),
			"data" => $this -> widgetModel_data -> getItems(),
			"navigation" => $this -> widgetModel_data -> getNavigation()
		));
	}

	public function sortSave(){
		$this -> widgetModel_data -> saveSort();
		$this -> tool_go -> back(2);
	}

	

	public function back(){
		$this -> tool_go -> back(2);
	}

	public function save(){
		$this -> widgetModel_data -> save();
		$this -> tool_go -> back(2);
	}
}
?>