
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=EDGE" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Clue® - Address Register</title>
    <link href="/team3/content/images/favicon.ico" rel="shortcut icon" sizes="16x16 32x32 64x64 96x96" />
    <link href="/team3/content/site?v=ayJOojZo9l5enKhEaCbc7CBc9uMaIaaJSqsXQ4xW9Ec1" rel="stylesheet"/>
<link href="/team3/content/themes/default/css?v=L6Baseib_tyIeQNT9vk6_8rG9R09FJYSx5j3GuWMY7k1" rel="stylesheet"/>
<link href="/team3/content/file-icons/bundle?v=vYgGB5an-9_8Xc0o6aihMslfl5XEgsf_oXwBD_B8Kto1" rel="stylesheet"/>

    
    <meta name="application-name" content="Clue® - Clue" />
    <meta name="msapplication-navbutton-color" content="#00704a" />
    
    
</head>
<body>
    <div class="bodyWrapper grid">
        <div id="mainWrapper">
            <div id="header">
                <div class="header">
                    <div class="logo span4">
                        <a id="homePage" href="/team3/Dashboard?id=0"><img src="/team3/content/images/logo.png" alt="Clue Logo"></a>
                    </div>
                    <div class="breadcrumbs span5">
                        &nbsp;
                    </div>
                    <div class="account span15 right">
                        Logged in as <a href="/team3/AccountProfile" onclick="return clue.accountProfile(this);" title="User Account Profile"><span class="loggedInUserName">MILLS</span></a>

                                <span class="blk" data-bind="visible:(selectedInvestigation() == null && availableInvestigations && availableInvestigations().length > 0)">(Standard Mode)</span>
                                <a href="#" data-bind="visible:(selectedInvestigation() == null && availableInvestigations && availableInvestigations().length > 0), event: {click: function () { investigationMode(); return true; } }">Switch to Investigation Mode</a>
                        <span>|</span>
                        <a href="/team3/LogOff" id="LogOff">Log Off</a>
                        
                            <div>
                                <form>
                                    <input id="globalQuickSearch" class="text-box single-line typeahead" type="text" placeholder="Global Search">
                                    <input id="globalQuickSearchGo" class="search" type="submit" data-bind="click: function () {
                                    var e = document.getElementById('globalQuickSearch');
                                    var qs = encodeURIComponent('s=' + clue.wildcardify(e.value) + '&f=2');
                                    window.location.href = clue.baseUrl + 'search/index2/' + ((typeof(selectedInvestigation) != 'undefined' && selectedInvestigation && selectedInvestigation()) ? selectedInvestigation().Id : 0) + '#search=' + qs;
                                }" value="" />
                                </form>
                            </div>
                    </div>
                </div>
                <div class="nav">
<ul>
    <li class="span3 no-items">
        <a href="/team3/Dashboard?id=0">Dashboard</a>
    </li>    
    <li class="span3">
        <a href="javascript:void(0)">Registers</a>
        <ul>
                <li>
                    <a href="/team3/Incident/Index/0">Incident</a>
                </li>
                                        <li>
                    <a href="/team3/Person/Index/0">Person</a>
                </li>
                            <li>
                    <a href="/team3/Staff/Index/0">Staff</a>
                </li>
                            <li>
                    <a href="/team3/Organisation/Index/0">Organisation</a>
                </li>
                            <li>
                    <a href="/team3/Address/Index/0">Address</a>
                </li>
                            <li>
                    <a href="/team3/Communication/Index/0">Communication</a>
                </li>
                            <li>
                    <a href="/team3/Vehicle/Index/0">Vehicle</a>
                </li>
                            <li>
                    <a href="/team3/Case/Index/0">Case</a>
                </li>
                            <li>
                    <a href="/team3/Statement/Index/0">Statement</a>
                </li>
                            <li>
                    <a href="/team3/Material/Index/0">Material</a>
                </li>
                            <li>
                    <a href="/team3/Intelligence/Index/0">Intelligence</a>
                </li>
                            <li>
                    <a href="/team3/Event/Index/0">Event</a>
                </li>
                            <li data-bind="visible: ((typeof selectedInvestigation == 'undefined') || !selectedInvestigation() || ( selectedInvestigation() !== null && selectedInvestigation().Id == 0 ))">
                    <a href="/team3/Investigation/Index/0">Investigation</a>
                </li>
                            <li>
                    <a href="/team3/Decision/Index/0">Decision</a>
                </li>
                            <li>
                    <a href="/team3/Outcome/Index/0">Outcome</a>
                </li>
        </ul>
    </li>
    <li class="span3">
        <a href="javascript:void(0)">Tools</a>
        <ul>
                <li>
                    <a href="/team3/Task/Index/0">Task</a>
                </li>
                    </ul>
    </li>
    <li class="span3">
        <a href="javascript:void(0)">Research</a>
        <ul>
                        <li>
                <a href="/team3/Search/Index2/0">Global Search</a>
            </li>
                            <li data-bind="visible: ((typeof selectedInvestigation == 'undefined') || !selectedInvestigation() || ( selectedInvestigation() !== null && selectedInvestigation().Id == 0 ))">
                    <a href="/team3/Graph">Charting</a>
                </li>
                    </ul>
    </li>
    <li class="span3" data-bind="visible: ((typeof selectedInvestigation == 'undefined') || !selectedInvestigation() || ( selectedInvestigation() !== null && selectedInvestigation().Id == 0 ))">
        <a href="javascript:void(0)">Options</a>
        <ul>
                <li>
                    <a href="/team3/Menu">Menus</a>
                </li>
                                        <li>
                    <a href="/team3/CustomFields">Custom Fields</a>
                </li>
                            <li>
                    <a href="/team3/List">Lists</a>
                </li>
                            <li>
                    <a href="/team3/FieldManagement">Fields</a>
                </li>
                            <li>
                    <a href="/team3/TagDefinition">Tags</a>
                </li>
                    </ul>
    </li>
</ul>


                </div>
                <div class="title" >
                    
    <h2>Address Register</h2>

                </div>
            </div>
            <h2></h2>
            <div class="main">
                    <script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?key=Owkr31DJTKST0oeO-YcZv52txtgmMhjLAuecGdxVrdY&callback=loadMap' async defer></script>




<div id="root">
        <p class="registerAdd">
                    <a href="#" data-bind="visible: containerId() > 0 && component.Name != 'Case', click: function() { createInvestigationLink('Address', 'Address');}">Add Address</a>
                    <a href="/team3/Address/Create/0" id="addRecord" data-bind="visible: !containerId() || component.Name == 'Case'">Add Address</a>
        </p>

    <div class="field span6" title="Save time by saving your frequently-used Advanced Searches a.k.a. 'Views'. 'Views' functionality allows you to save any search filters and/or visible column combinations, but not search terms.">
        <select id="viewsDropDown" class="combo-box registerComboBox" data-bind="options: availableViews, optionsText: 'Name', value: selectedView, optionsAfterRender: highlightDefaultView, disable: isSearching(), css: { disabled: isSearching() }"></select>
    </div>

    <form data-bind="submit: newSearch">
        <div class="field span16">
            <!-- ko ifnot: disableFreetext -->
            <input id="searchTerm" class="single-line customText-box" type="text" placeholder="Search this Register" data-bind="value: freeText, event: {keyup: function (data,event) {if (event.keyCode < 35 || event.keyCode > 40) {isSearched(false);} return true;} }, disable: isSearching(), css: { disabled: isSearching() }, hasFocus: freeTextHasFocus" />
            <!-- /ko -->
            <!-- ko if: disableFreetext -->
            &nbsp;
            <!-- /ko -->
        </div>
        <div class="field span2">
            <input id="go" class="button" type="submit" value="Go" data-bind="disable: isSearching(), visible: showSearch, css: { disabled: isSearching() }" />
        </div>
        <div style="clear:both;"></div>

        <div data-bind="template: { name: 'template__advanced' }"></div>
    </form>
        <form data-bind="submit: function(){}">
            <div style="position:relative">
                <button data-bind="visible: showMap(), click: function() {mapNewTab(); return true; }" style="z-index: 2; position: absolute; top: 10px; left: 10px;">Display in new tab</button>
                <button data-bind="visible: showMap(), click: function() {hideMap(false); return true; }" style="z-index: 2; position: absolute; top: 10px; right: 10px;">X</button>
                <div style="width: 100%; height: 500px;" id="map" data-bind="visible: showMap()">
                </div>
            </div>
        </form>

    <!-- ko if:  component.Name !== 'Intelligence'  &&  component.Name !== 'Case' && component.Name !== 'Investigation' && component.Name !== 'Task' && component.Name !== 'Activity'-->
    <div class="bulkActionWrapper" data-bind="css: { hidden: !$root.bulkUrl }">
        <div class="bulkEdit">
            <input type="checkbox" data-bind="click: showBulkEditCheckBoxes, check: BulkEditCheckBoxValue">Bulk Action
        </div>
    </div>
    <!-- /ko -->
    <!-- ko  if:  component.Name === 'Intelligence' -->
    <div style="clear:both" data-bind="template: { name: 'template__registerListOther', data: resultOther }, visible: resultOther().results && resultOther().results.length > 0"></div>
    <!-- /ko -->
    <br />
    <div style="clear:both" data-bind="template: { name: 'template__registerList', data: result }"></div>

</div>



            </div>
        </div>
        <div class="footer">
            <span class="copyright span12">
                Copyright &copy; 2019 <a href="http://www.clue.co.uk" target="_blank">Clue Computing Company Ltd</a>
            </span>
            <span class="logo span12">
                <img src="/team3/content/images/clue.png" alt="Clue® Logo" title="Clue® v1.79.19218" />
            </span>
        </div>
    </div>
    <div class="templates">
        
    <script id="template__advanced" type="text/html">
        <div class="advancedOptionsBorder">
            <fieldset style="border:0">
                <legend class="skip-custom customLegend">
                    <span id="advOptClose" class="h3-options advancedOptions" data-bind="click: toggleAdvancedOptions, visible: advancedOptionsVisible">Advanced Options <i class="fas fa-minus"></i></span>
                    <span id="advOptOpen" class="h3-options advancedOptions" data-bind="click: toggleAdvancedOptions, visible: !advancedOptionsVisible()">Advanced Options <i class="fas fa-plus"></i></span>
                    
                </legend>

                <div id="advancedOptionsDiv" data-bind="visible: advancedOptionsVisible">
                    <br />
                    <div class="label span4">
                        <h3 id="advOptFilterClose" class="h3-options advancedOptions" data-bind="click: toggleFilterButton, visible: filterAreaVisible">Filters <i class="fas fa-minus"></i></h3>
                        <h3 id="advOptFilterOpen" class="h3-options advancedOptions" data-bind="click: toggleFilterButton, visible: !filterAreaVisible()">Filters <i class="fas fa-plus"></i></h3>
                    </div>
                    <div id="filterDiv" data-bind="visible: filterAreaVisible">
                        <ul class="advancedOptionsCheckBox">
                            <!-- ko ifnot: disableFreetext -->
                            <li>
                                <label data-bind="disable: isSearching(), css: { disabled: isSearching() }">
                                    <input id="advOptFilterRecords" type="checkbox" data-bind="checked: selectedView().SearchRecords, click: function() { setDirty(true); return true; }" />
                                    <span>Records</span>
                                </label>
                            </li>
                            <li>
                                <label data-bind="disable: isSearching(), css: { disabled: isSearching() }">
                                    <input id="advOptFilterAttachments" type="checkbox" data-bind="checked: selectedView().SearchAttachments, click: function() { setDirty(true); return true; }" />
                                    <span>Attachments</span>
                                </label>
                            </li>
                            <!-- /ko -->
                        </ul>
                        <p>
                            <a href="#" data-bind="text: toggleFilterText, click: toggleFilter"></a>
                            
                        </p>

                        <div data-bind="template: { name: 'template__filterCriteria', data: filter }, visible: filterVisible, disable: isSearching(), css: { disabled: isSearching() }"></div>

                        <ul data-bind="visible: logicVisible">
                            <li>
                                <div class="label span2">
                                    <label>Logic:</label>
                                </div>
                                <div class="field span18">
                                    <input style="margin-left:-30px;max-width:716px!important;min-width:716px!important" id="logic" name="logic" class="text-box single-line" type="text" data-bind="value: filter.logic, event: { keypress: function( data, event ){ setDirty(true); return true; }}" />
                                </div>
                                <div class="span2">
                                    <button id="advOptValidate" class="button" style="margin-top:-1px" type="button" title="Validate" data-bind="click: validate">Validate</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div style="clear:both;"></div>
                    <br />
                    <div class="label span4">
                        <h3 id="advOptColumnsClose" class="h3-options advancedOptions" data-bind="click: toggleColumnsButton, visible: columnsAreaVisible">Columns <i class="fas fa-minus"></i></h3>
                        <h3 id="advOptColumnsClose" class="h3-options advancedOptions" data-bind="click: toggleColumnsButton, visible: !columnsAreaVisible()">Columns <i class="fas fa-plus"></i></h3>
                    </div>
                    <div id="columnsDiv" data-bind="visible: columnsAreaVisible">
                        <ul>
                            <li>
                                <div style="float:left">
                                    <div class="label span10" style="background-color:#ddd">
                                        <span style="padding:3px">AVAILABLE COLUMNS</span>
                                    </div>
                                    <div class="span10" style="clear:left">
                                        <select id="advOptAvailableColumns" class="combo-box" size="12" data-bind="options: availableFields, optionsText: function (item) { return item.friendlyName || item.name; }, value: selectedAvailableField, disable: isSearching(), css: { disabled: isSearching() }"></select>
                                    </div>
                                    <div class="span1 span1-custom" style="margin-right:6px">
                                        <button id="advOptColumnsMoveRight" class="moveButtons1 fas fa-arrow-right fa-2x" type="button" data-bind="attr: { height:'34px', width:'20px'},click: addField, disable: isSearching() || !selectedAvailableField(), css: { disabled: isSearching() || !selectedAvailableField() }"></button>
                                        <button id="advOptColumnsMoveLeft" class="moveButtons1 fas fa-arrow-left fa-2x" type="button" data-bind="attr: { height:'34px', width:'20px'},click: removeField, disable: isSearching() || !selectedIncludedField(), css: { disabled: isSearching() || !selectedIncludedField() }"></button>
                                    </div>
                                </div>
                                <div style="float:left">
                                    <div class="label span10" style="background-color:#ddd">
                                        <span style="padding:3px">SELECTED COLUMNS</span>
                                    </div>
                                    <div class="span10" style="clear:left">
                                        <select id="advOptSelectedColumns" class="combo-box" size="12" data-bind="options: includedFields, optionsText: function (item) { return item.friendlyName || item.name; }, value: selectedIncludedField, disable: isSearching(), css: { disabled: isSearching() }"></select>
                                    </div>
                                    <div class="span1 span1-custom">
                                        <button id="advOptColumnsMoveUp" class="moveButtons1 fas fa-arrow-up fa-2x" type="button" data-bind="attr: {height:'34px', width:'20px'},click: moveUp, disable: isSearching() || !selectedIncludedField() || (includedFields.indexOf(selectedIncludedField()) < 1), css: { disabled: isSearching() || !selectedIncludedField() || (includedFields.indexOf(selectedIncludedField()) < 1) }"></button>
                                        <button id="advOptColumnsMoveDown" class="moveButtons1 fas fa-arrow-down fa-2x" type="button" data-bind="attr: { height:'34px', width:'20px'},click: moveDown, disable: isSearching() || !selectedIncludedField() || (includedFields.indexOf(selectedIncludedField()) == (includedFields().length - 1)), css: { disabled: isSearching() || !selectedIncludedField() || (includedFields.indexOf(selectedIncludedField()) == (includedFields().length - 1)) }"></button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div style="clear:both;"></div>
                    <br />
                    <div class="label span4">
                        <h3 id="advOptSortClose" class="h3-options advancedOptions" data-bind="click: toggleSortButton, visible: sortAreaVisible">Sort <i class="fas fa-minus"></i></h3>
                        <h3 id="advOptSortOpen" class="h3-options advancedOptions" data-bind="click: toggleSortButton, visible: !sortAreaVisible()">Sort <i class="fas fa-plus"></i></h3>
                    </div>
                    <div id="sortDiv" data-bind="visible: sortAreaVisible">
                        <div class="list">
                            <table>
                                <thead>
                                    <tr>
                                        <th style="width:1px"></th>
                                        <th data-bind="style: {minWidth:'300px'}">Field</th>
                                        <th data-bind="style: {minWidth:'100px'}">Order</th>
                                        
                                    </tr>
                                </thead>
                                <tbody data-bind="foreach: selectedView().SortBy">
                                    <tr>
                                        <td class="action" style="text-align:right;vertical-align:middle">
                                            <label class="read" data-bind="text: ($index()+1)+'.'"></label>
                                        </td>
                                        <td style="text-align:center;vertical-align:middle">
                                            <select id="advOptSortField" class="combo-box edit" style="display:table-cell; width:100%" data-bind="options: $parent.sortByAvailableFields, optionsText: function (item) { if(item.name == ''){ return '[Default]'};  return item.friendlyName || item.name; }, optionsValue: function (item) { return item.friendlyName || item.name; }, value: $parent.selectedSortByField, event: {change: function (data,event) {$parent.isDirty(true); return true;} }"></select>
                                        </td>
                                        <td style="text-align:center;vertical-align:middle">
                                            <select id="advOptSortOrder" class="combo-box edit" style="display:table-cell; width:100%" data-bind="options: $parent.sortByOrderValues, value: $parent.selectedSortByOrder, event: {change: function (data,event) {$parent.isDirty(true); return true;} }"></select>
                                        </td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div style="clear:both;"></div>
                    <br />

                    <ul>
                        <li class="advancedOptionsPadding">
                            <div class="label span4">
                                Default View
                            </div>
                        </li>
                        <li class="advancedOptionsPadding">
                            <label data-bind="disable: disableDefaultViewToggle(), css: { disabled: disableDefaultViewToggle() }, click: function() { setDirty(true); return true; }">
                                <input id="advOptMakeDefaultView" type="checkbox" data-bind="checked: selectedView().IsDefault" />
                                <span>Make this my default view for Address</span>
                            </label>
                        </li>
                            <li class="advancedOptionsPadding">
                                <label data-bind="click: function() { setDirty(true); return true; }">
                                    <input id="advOptShowOnDashboard" type="checkbox" data-bind="checked: selectedView().DashboardOrder" />
                                    <span>Show on Dashboard</span>
                                </label>
                            </li>
                    </ul>

                    <p class="right">
                            <button id="advOptExport" class="button" type="button" title="Export" data-bind="click: function() {xprt(); return true; }, disable: isSearching() || !isSearched() || !filter.isSearched() || !result() || (result().totalRecords == 0), css: {disabled: isSearching() || !isSearched() || !filter.isSearched() || !result() || (result().totalRecords == 0) }">Export</button>
                                                <button class="button" id="advOptSave" type="button" title="Save" data-bind="click: save, disable: !isDirty() && !filter.isDirty(), css: {disabled: !isDirty() && !filter.isDirty() }, visible: selectedView().Id > 0 && selectedView().UserId > 0">Save</button>
                        <button class="button" id="advOptSaveAs" type="button" title="SaveAs" data-bind="click: saveAs, visible: selectedView().Id > 0 && selectedView().UserId > 0">Save As</button>
                        <button class="button" id="advOptSaveNewView" type="button" title="Save these changes as a new view" data-bind="click: saveAs, visible: !(selectedView().Id > 0 && selectedView().UserId > 0) && (isDirty() || filter.isDirty())">Save these changes as a new view</button>
                        <button class="button" id="advOptDelete" type="button" title="Delete" data-bind="click: deleteView, visible: selectedView().Id > 0 && selectedView().UserId > 0">Delete</button>
                        <input id="goBottom" class="button" type="submit" value="Go" data-bind="disable: isSearching(), css: { disabled: isSearching() }" />
                    </p>
                </div>
            </fieldset>
        </div>
    </script>

    <script id="template__saveAs" type="text/html">
        <form method="post" autocomplete="off" data-bind="attr: { id: dialogId + 'form' }">
            <fieldset style="border:0">
                <legend class="hidden"></legend>

                <ul>
                    <li>
                        <p>
                            <label for="Name">Please provide a name for this view</label>:
                        </p>
                    </li>
                    <li>
                        <div class="field span10">
                            <input class="text-box single-line" type="text" data-bind="value: Name" />
                        </div>
                    </li>
                </ul>
            </fieldset>
        </form>
    </script>

    <div id="hideSetting_unsavedChanges" title="Unsaved Changes">This action will unload the current view. Any unsaved changes will be lost.<br />Do you want to proceed?<br /><br /><input type="checkbox" data-bind="checked: unsavedChangesCheckBox" />Don't show this message again</div>


<script id="template__registerList" type="text/html">
    <div data-bind="css: $parent && $parent.isLegacy ? 'list legacy' : 'list maxWidth'">
        <table data-bind="css: { 'list-collapsed': $parent.isCollapsed }">
            <!-- ko if: $data.legacyCaption -->
            <caption data-bind="css: { 'no-border-bottom': $parent.isCollapsed() || !$data.results }">
                <span data-bind="text: legacyCaption"></span>
                <div style="float:right">
                    <span style="padding-right:5px" data-bind="text: totalRecords + ' record' + ((totalRecords === 1) ? '' : 's')"></span>
                    <a href="#" style="color:#fff" data-bind="click: function () { $parent.search(); }"><i class="fas fa-plus"></i></a>
                </div>
            </caption>
            <!-- /ko -->
            <!-- ko if: !$data.legacyCaption && $parent.caption -->
            <caption data-bind="css: { 'no-border-bottom': $parent.isCollapsed() || !$data.results }">
                <span data-bind="text: $parent.caption"></span>
                <!-- ko if: $parent.isLegacy -->
                <div style="float:right">
                    <span style="padding-right:5px" data-bind="text: totalRecords + ' record' + ((totalRecords === 1) ? '' : 's')"></span>
                    <a href="#" style="color:#fff" data-bind="click: $parent.toggleCollapse"><i class="fa" data-bind="css: { 'fa-plus': $parent.isCollapsed, 'fa-minus': !$parent.isCollapsed() }"></i></a>
                </div>
                <!-- /ko -->
            </caption>
            <!-- /ko -->
            <thead>
                <tr>
                    <!-- ko if:  $root.RegisterName !== 'Intelligence'  &&  $root.RegisterName !== 'Case' && $root.RegisterName !== 'Investigation' && $root.RegisterName !== 'Task' && $root.RegisterName !== 'Activity'-->
                    <th style="text-align:center; min-width:40px;" data-bind="visible: $root.bulkEditCheckBoxesVisible"> <input type="checkbox" id="tickAll" data-bind="click: $root.tickRows, checked: $root.tickRowsCheckBox" /></th>
                    <!-- /ko -->
                        <th style="padding:1px;text-align:center" id="PadlockHeaderIcon" data-bind="visible: ($root.component == null || $root.component.Name !== 'Investigation') && ($parent && (!$parent.caption || !$parent.isLegacy)) && ($parent && (!$parent.caption || !$parent.isLegacy && $parent.caption.indexOf('External Documents') == -1)), attr: { width:'20px'}"><i class="fas fa-lock" data-bind="attr: { title: 'Created in an Investigation. Restrictions apply from your current location.', height:'14px', width:'20px' }" /></th>
                                        <!-- ko foreach: { data: fields, as: 'field' } -->
                    <!-- ko if: !$parents[1].isLegacy && $parent.results && $parent.totalRecords > 0 -->
                    <th style="min-width:45px;" data-bind="style: { width: field.Name == 'MainImageId' ? '0' : null }">
                        <a href="#" data-bind="text: (field.Title || field.Name), attr: { title: 'Sort by ' + (field.Title || field.Name) }, click: function () { $parents[1].sort(field); }"></a>
                        <i style="float:right" class="fas fa-arrow-down" data-bind="visible:(field.Name == $parents[1].sortOrderForList()) && ($parents[1].isDescending() == false),attr: { title: 'A to Z', height:'14px', width:'20px' }" />
                        <i style="float:right" class="fas fa-arrow-up" data-bind="visible:(field.Name == $parents[1].sortOrderForList()) && ($parents[1].isDescending() == true),attr: { title: 'Z to A', height:'14px', width:'20px' }" />
                    </th>
                    <!-- /ko -->
                    <!-- ko if: $parents[1].isLegacy || !$parent.results || $parent.totalRecords === 0 -->
                    <th data-bind="text: field.Title || field.Name"></th>
                    <!-- /ko -->
                    <!-- /ko -->
                </tr>
            </thead>
            <!-- ko if: $data.results -->
            <tbody id="resultsBody" data-bind="foreach: { data: results, as: 'result' }">
                <tr>
                    <!-- ko if:  $root.RegisterName !== 'Intelligence'  &&  $root.RegisterName !== 'Case' && $root.RegisterName !== 'Investigation' && $root.RegisterName !== 'Task' && $root.RegisterName !== 'Activity'-->
                    <td style="text-align:center;width:0;white-space:nowrap" data-bind="visible: $root.bulkEditCheckBoxesVisible">
                        <input type="checkbox" data-bind="attr: { id: 'chk_' + result.Id }, click: $root.highlightTickedRow" />
                        <div style="text-align:center" class="dropdown">
                            <button data-bind="click: function () { $root.dropDownClickMain($index);}" class="dropbtn"></button>
                            <div class="dropdown-contentMain" data-bind="attr: { id: ('menudropDownMain' + $index()) }">
                                <a class="white-space-pre clickable" style="text-align:left" href="#" data-bind="click:  function () { $root.dropDownClick($index);}">Link           ></a>
                                <div class="dropdown-content" data-bind="attr: { id: ('menudropDown' + $index()) }">
                                        <a href="#" data-bind="click:  function () { $root.LinkIncidentClick($root);}">Incident</a>
                                                                                                                <a href="#" data-bind="click:  function () { $root.LinkPersonClick($root);}">Person</a>
                                                                            <a href="#" data-bind="click:  function () { $root.LinkStaffClick($root);}">Staff</a>
                                                                            <a href="#" data-bind="click:  function () { $root.LinkOrganisationClick($root);}">Organisation</a>
                                                                            <a href="#" data-bind="click:  function () { $root.LinkAddressClick($root);}">Address</a>
                                                                            <a href="#" data-bind="click:  function () { $root.LinkCommunicationClick($root);}">Communication</a>
                                                                            <a href="#" data-bind="click:  function () { $root.LinkVehicleClick($root);}">Vehicle</a>
                                                                            <a href="#" data-bind="click:  function () { $root.LinkStatementClick($root);}">Statement</a>
                                                                            <a href="#" data-bind="click:  function () { $root.LinkMaterialClick($root);}">Material</a>
                                                                            <a href="#" data-bind="click:  function () { $root.LinkEventClick($root);}">Event</a>
                                                                            <a href="#" data-bind="click:  function () { $root.LinkDecisionClick($root);}">Decision</a>
                                                                            <a href="#" data-bind="click:  function () { $root.LinkOutcomeClick($root);}">Outcome</a>
                                </div>
                            </div>
                        </div>
                    </td>
                    <!-- /ko -->
                        <td style="padding:1px;text-align:center" id="PadlockIcon" data-bind="visible: ($root.component == null || $root.component.Name !== 'Investigation') && ($parents[1] && (!$parents[1].caption || !$parents[1].isLegacy && $parents[1].caption.indexOf('External Documents') == -1)), attr: { width:'20px'}"><i class="fas fa-lock" data-bind="visible: !( result.e6Id == null || ( result.e6Id != null &&  result.e6Id == 0)), attr: { title: $parents[1].setPadlockTitle(result.e6Title,$root.containerId(),result.e6Id), height:'14px', width:'20px' }"></i></td>
                                        <!-- ko foreach: { data: $parent.fields, as: 'field' } -->
                    <!-- ko if: $index() === 0 -->
                        <!-- ko if: $parents[2].detailsUrl -->
                        <td class="clickable" data-bind="click: function () { $parents[2].details(result);}">
                            <a href="#" data-bind="text: $parents[2].format(result[field.Name], field) || '...', attr: { href: $parents[2].detailsUrl + '/' + 0 + '/' + result.Id }, click: function (m, e) { $parents[2].setRowHighlightDetails(result); e.stopPropagation(); return true; }"></a>
                        </td>
                        <!-- /ko -->
                        <!-- ko ifnot: $parents[2].detailsUrl -->
                        <td data-bind="text: $parents[2].format(result[field.Name], field)"></td>
                        <!-- /ko -->
                    <!-- /ko -->
                    <!-- ko if: $index() !== 0 -->
                    <!-- ko if: field.Name != "attachmentCaption" -->
                    <!-- ko if: field.Name == "MainImageId" -->
                    <td>
                        <img alt="Main Image" data-bind="visible: result[field.Name],attr: { src: $parents[2].viewThumbnailUrl + '/?id=' + result[field.Name] + '&maxHeight=150&maxWidth=150' }" />
                    </td>
                    <!-- /ko -->
                    <!-- ko if: field.Name == "Tags" -->
                    <td data-bind="css:{ 'clickable': $parents[2].detailsUrl },, click: function () { $parents[2].details(result);}">
                        <div class="tagOther" data-bind="visible:result[field.Name],foreach: { data: $parents[2].listOfTags(result[field.Name], field), as: 'resultdata' }">
                            <!-- ko if: $data.indexOf("*") > -1 -->
                            <span class="tagNotNormalOther">*</span>
                            <span class="tagText" data-bind="text:resultdata.substring(1)"></span>
                            <!-- /ko -->
                            <!-- ko if: $data.indexOf("*") < 0 -->
                            <span class="tagText" data-bind="text:resultdata"></span>
                            <!-- /ko -->
                        </div>
                    </td>
                    <!-- /ko -->
                    <!-- ko if: field.Name != "MainImageId" && field.Name != "Tags"  -->
                    <td class="white-space-pre" data-bind="css: { 'clickable': $parents[2].detailsUrl }, text: $parents[2].format(result[field.Name], field), click: function () { $parents[2].details(result);}"></td>
                    <!-- /ko -->
                    <!-- /ko -->
                    <!-- ko if: field.Name == "attachmentCaption" -->
                    <td class="clickable" data-bind="click: function () { $parents[2].details(result); }">
                        <a href="#" data-bind="text: $parents[2].format(result[field.Name], field), attr: { href: $parents[2].attachmentUrl + '/' + result.attachmentId }, click: function (m, e) { e.stopPropagation(); return true; }"></a>
                    </td>
                    <!-- /ko -->
                    <!-- /ko -->
                    <!-- /ko -->
                </tr>
            </tbody>
            <tfoot>
                <tr>
                        <td data-bind="attr: { colspan: fields.length + 1 + ($root.bulkEditCheckBoxesVisible ? 1 : 0) }">
                            <!-- ko if: totalPages > 1 -->
                            <!-- ko if: isFirstPage -->
                            First Previous
                            <!-- /ko -->
                            <!-- ko if: !isFirstPage -->
                            <a href="#" title="Go to the first page" data-bind="click: $parent.first">First</a>
                            <a href="#" title="Go to the previous page" data-bind="click: $parent.previous">Previous</a>
                            <!-- /ko -->
                            <!-- ko if: isLastPage -->
                            Next Last
                            <!-- /ko -->
                            <!-- ko if: !isLastPage -->
                            <a href="#" title="Go to the next page" data-bind="click: $parent.next">Next</a>
                            <a href="#" title="Go to the last page" data-bind="click: $parent.last">Last</a>
                            <!-- /ko -->
                            <!-- /ko -->
                            <div style="float:right"><span data-bind="text: ((totalPages > 1) ? 'Showing ' + firstIndex + ' to ' + lastIndex + ' of ' : '') + totalRecords + ' record' + ((totalRecords === 1) ? '' : 's')"></span><span data-bind="text: $root.totalSelectedBulkRows, visible: $root.bulkEditCheckBoxesVisible"></span></div>
                        </td>
                </tr>
            </tfoot>
            <!-- /ko -->
        </table>
    </div>
</script><script id="template__registerListOther" type="text/html">
    <div data-bind="css:'list maxWidth'">
        <table data-bind="css: { 'list-collapsed': $parent.isCollapsedOther }">
            <caption data-bind="css: { 'no-border-bottom': $parent.isCollapsedOther() } ">
                <!-- ko if: $data.results -->
                        <span data-bind="visible:$parent.isGlobal">Restricted Intelligence Results</span>
                        <span data-bind="visible:!$parent.isGlobal">Restricted Results</span>
                <!-- /ko -->
                <div style="float:right">
                    <span style="padding-right:5px" data-bind="text: $data.totalRecords + ' record' + (($data.totalRecords === 1) ? '' : 's')"></span>
                    <a href="#" data-bind="click: function () { $parent.toggleCollapseOther(); }">
                        <img data-bind="visible:!$parent.isCollapsedOther()" style="margin:-3px 0 -3px 0" src="/team3/Content/Images/minus-hover.png" />
                        <img data-bind="visible:$parent.isCollapsedOther()" style="margin:-3px 0 -3px 0" src="/team3/Content/Images/plus-hover.png" />
                    </a>
                </div>
            </caption>
            <thead data-bind="visible:!$parent.isCollapsedOther">
                <tr>
                    <!-- ko foreach: { data: fields, as: 'field' } -->
                    <th data-bind="style: { width: field.Name == 'MainImageId' ? '0' : null }">
                        <a href="#" data-bind="text: field.Title || field.Name, attr: { title: 'Sort by ' + (field.Title || field.Name) }, click: function () { $parents[1].sort(field); }"></a>
                    </th>
                    <!-- /ko -->
                </tr>
            </thead>
            <!-- ko if: $data.results -->
            <tbody id="resultsBody" data-bind="foreach: { data: results, as: 'result' }">
                <tr data-bind="visible:!$parent.isCollapsedOther">
                    <!-- ko foreach: { data: $parent.fields, as: 'field' } -->
                    <td class="white-space-pre" data-bind="text: $parents[2].formatOther(result[field.Name], field)"></td>
                    <!-- /ko -->
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td data-bind="attr: { colspan: fields.length + 1  }">
                        <!-- ko if: totalPages > 1 -->
                        <!-- ko if: isFirstPage -->
                        First Previous
                        <!-- /ko -->
                        <!-- ko if: !isFirstPage -->
                        <a href="#" title="Go to the first page" data-bind="click: $parent.first">First</a>
                        <a href="#" title="Go to the previous page" data-bind="click: $parent.previous">Previous</a>
                        <!-- /ko -->
                        <!-- ko if: isLastPage -->
                        Next Last
                        <!-- /ko -->
                        <!-- ko if: !isLastPage -->
                        <a href="#" title="Go to the next page" data-bind="click: $parent.next">Next</a>
                        <a href="#" title="Go to the last page" data-bind="click: $parent.last">Last</a>
                        <!-- /ko -->
                        <!-- /ko -->
                    </td>
                </tr>
            </tfoot>
            <!-- /ko -->
        </table>
    </div>
</script><script id="template__filterCriteria" type="text/html">
    <div class="list maxWidth">
        <table>
            <thead>
                <tr>
                    
                    <th style="width:1px"></th>
                    <th data-bind="style: {width:(isSingleComponent() ? '0px' : '200px')}, visible:!isSingleComponent()">Component</th>
                    <th data-bind="style: {width:(isSingleComponent() ? '165px' : '100px')}">Field</th>
                    
                    <th data-bind="style: {width:(isSingleComponent() ? '165px' : '100px')}">Operator</th>
                    <th data-bind="style: {width:(isSingleComponent() ? '465px' : '400px')}">Value</th>
                    <th style="width:1px">
                    </th>
                </tr>
            </thead>
            <tbody data-bind="foreach: terms">
                <tr>
                    
                    <td class="action" style="text-align:right;vertical-align:middle">
                        <label class="read" data-bind="text: ($index()+1)+'.'"></label>
                    </td>
                    <td data-bind="style: {width:($parent.isSingleComponent() ? '0px' : '200px')}, visible:!$parent.isSingleComponent()" style="text-align:center;vertical-align:middle">
                        <select class="combo-box edit" style="display:table-cell; width:100%" data-bind="attr: {id: 'advOptFilterComponentName' + $index()}, options: $parent.componentNames, value: $data.component, event: {change: function() {$parent.changeComponentForTerm($data); $parent.clearValue($data); return true;} }"></select>
                    </td>
                    <td data-bind="style: {width:($parent.isSingleComponent() ? '165px' : '100px')}" style="text-align:center;vertical-align:middle">
                        <select class="combo-box edit" style="display:table-cell; width:100%" data-bind="attr: {id: 'advOptFilterField' + $index()}, options: $data.fields, value: $data.field, event: {change: function() {$parent.clearValue($data); if($parent.isBoolean($data)){$data.valueLookup(true);} $data.operator($parent.operators()[$parent.components[$parent.componentNames.indexOf($data.component())].FilterFields[$data.fields.indexOf($data.field())].FieldType][0]); return true; } }"></select>
                    </td>
                    
                    <td data-bind="style: {width:($parent.isSingleComponent() ? '165px' : '100px')}" style="text-align:center;vertical-align:middle">
                        <select class="combo-box edit" style="display:table-cell; width:100%" data-bind="attr: {id: 'advOptFilterOperator' + $index()}, options: $parent.operators()[$parent.components[$parent.componentNames.indexOf($data.component())].FilterFields[$data.fields.indexOf($data.field())].FieldType], value: $data.operator, event: {change: function(){$parent.isDirty(true);$parent.isSearched(false); if ($data.operator() == $parent.operatorsEnum.isEmpty || $data.operator() == $parent.operatorsEnum.isNotEmpty){$parent.clearValue($data);} if ($parent.isLookup($data) && ($data.operator() == $parent.operatorsEnum.equals || $data.operator() == $parent.operatorsEnum.notEquals)){$data.value('');} return true; } }"></select>
                    </td>
                    <td data-bind="style: {width:($parent.isSingleComponent() ? '465px' : '400px')}" style="text-align:center;vertical-align:middle">
                        <input type="text" style="box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;width:100%;" class="text-box edit" data-bind="
                        attr: {id: 'advOptFilterValue' + $index()}, 
                        value: $data.value,
                        event: {keypress: function (data,event) {$parent.isDirty(true);$parent.isSearched(false);return true;} },
                        visible: ($parent.components[$parent.componentNames.indexOf($data.component())].FilterFields[$data.fields.indexOf($data.field())].FieldType != $parent.searchTypesEnum.dateTime) && ($data.operator() != $parent.operatorsEnum.isEmpty) && ($data.operator() != $parent.operatorsEnum.isNotEmpty) && ($data.operator() != $parent.operatorsEnum.isBetween) && (!$parent.isLookup($data) || (($data.operator() == $parent.operatorsEnum.contains) || ($data.operator() == $parent.operatorsEnum.notContains)))" />
                        <select class="combo-box edit" style="display:table-cell; width:100%" data-bind="
                        options: $parent.isKeyedLookup($data) ? clue.keyedLookup($parent.getLookup($data)) : ($parent.isTagsLookup($data) ? clue.tagsLookup($parent.availableTags()) : clue.lookup($parent.getLookup($data), $data.valueLookup, 1)),
                        optionsValue: $parent.isKeyedLookup($data) ? 'Key' : null,
                        optionsText: $parent.isKeyedLookup($data) ? 'Value' : null,
                        value: $data.valueLookup,
                        event: {change: function () {$parent.isDirty(true);$parent.isSearched(false);} },
                        visible: $parent.isLookup($data) && ($data.operator() != $parent.operatorsEnum.isEmpty) && ($data.operator() != $parent.operatorsEnum.isNotEmpty) && ($data.operator() != $parent.operatorsEnum.contains) && ($data.operator() != $parent.operatorsEnum.notContains)"></select>
                        <input type="text" name="datepicker[]" style="box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;width:100%;" class="text-box edit" data-bind="
                        datepicker: $data.valueDate,
                        event: {keypress: function (data,event) {$parent.isDirty(true);$parent.isSearched(false);return true;} },
                        uniqueName: true,
                        visible: ($parent.components[$parent.componentNames.indexOf($data.component())].FilterFields[$data.fields.indexOf($data.field())].FieldType == $parent.searchTypesEnum.dateTime) && ($data.operator() != $parent.operatorsEnum.isEmpty) && ($data.operator() != $parent.operatorsEnum.isNotEmpty) && ($data.operator() != $parent.operatorsEnum.isBetween) && ($data.operator() != $parent.operatorsEnum.isWithinLast) && ($data.operator() != $parent.operatorsEnum.isWithinNext)" />
                        <input type="text" name="betweenA[]" style="box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;width:35%;float:left;" class="text-box edit" data-bind="
                        value: $data.valueA,
                        event: {keypress: function (data,event) {$parent.isDirty(true);$parent.isSearched(false);return true;} },
                        uniqueName: true,
                        visible: ($parent.components[$parent.componentNames.indexOf($data.component())].FilterFields[$data.fields.indexOf($data.field())].FieldType != $parent.searchTypesEnum.dateTime) && ($data.operator() == $parent.operatorsEnum.isBetween)" />
                        <span data-bind="visible: ($parent.components[$parent.componentNames.indexOf($data.component())].FilterFields[$data.fields.indexOf($data.field())].FieldType != $parent.searchTypesEnum.dateTime) && ($data.operator() == $parent.operatorsEnum.isBetween)">&nbsp;AND&nbsp;</span>
                        <input type="text" name="betweenB[]" style="display:table-cell;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;width:35%;float:right;" class="text-box edit" data-bind="
                        value: $data.valueB,
                        event: {keypress: function (data,event) {$parent.isDirty(true);$parent.isSearched(false);return true;} },
                        uniqueName: true,
                        visible: ($parent.components[$parent.componentNames.indexOf($data.component())].FilterFields[$data.fields.indexOf($data.field())].FieldType != $parent.searchTypesEnum.dateTime) && ($data.operator() == $parent.operatorsEnum.isBetween)" />
                        <input type="text" name="datepickerA[]" style="display:table-cell;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;width:35%;float:left;" class="text-box edit" data-bind="
                        datepicker: $data.valueDateA,
                        event: {keypress: function (data,event) {$parent.isDirty(true);$parent.isSearched(false);return true;} },
                        uniqueName: true,
                        visible: ($parent.components[$parent.componentNames.indexOf($data.component())].FilterFields[$data.fields.indexOf($data.field())].FieldType == $parent.searchTypesEnum.dateTime) && ($data.operator() == $parent.operatorsEnum.isBetween)" />
                        <span data-bind="visible: ($parent.components[$parent.componentNames.indexOf($data.component())].FilterFields[$data.fields.indexOf($data.field())].FieldType == $parent.searchTypesEnum.dateTime) && ($data.operator() == $parent.operatorsEnum.isBetween)">&nbsp;AND&nbsp;</span>
                        <input type="text" name="datepickerB[]" style="display:table-cell;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;width:35%;float:right;" class="text-box edit" data-bind="
                        datepicker: $data.valueDateB,
                        event: {keypress: function (data,event) {$parent.isDirty(true);$parent.isSearched(false);return true;} },
                        uniqueName: true,
                        visible: ($parent.components[$parent.componentNames.indexOf($data.component())].FilterFields[$data.fields.indexOf($data.field())].FieldType == $parent.searchTypesEnum.dateTime) && ($data.operator() == $parent.operatorsEnum.isBetween)" />
                        <input type="text" name="units[]" style="display:table-cell;box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;width:45%;float:left;" class="text-box edit" data-bind="
                        numeric: $data.valueUnit,
                        value: $data.valueUnit,
                        event: {keypress: function (data,event) {$parent.isDirty(true);$parent.isSearched(false);return true;} },
                        uniqueName: true,
                        visible: ($parent.components[$parent.componentNames.indexOf($data.component())].FilterFields[$data.fields.indexOf($data.field())].FieldType == $parent.searchTypesEnum.dateTime) && (($data.operator() == $parent.operatorsEnum.isWithinLast) || ($data.operator() == $parent.operatorsEnum.isWithinNext))">
                        <select class="combo-box edit" style="display:table-cell; width:50%; float:right;" data-bind="
                        options: $parent.timeUnits,
                        value: $data.valueUnitType,
                        event: {change: function () {$parent.isDirty(true);$parent.isSearched(false);} },
                        visible: ($parent.components[$parent.componentNames.indexOf($data.component())].FilterFields[$data.fields.indexOf($data.field())].FieldType == $parent.searchTypesEnum.dateTime) && (($data.operator() == $parent.operatorsEnum.isWithinLast) || ($data.operator() == $parent.operatorsEnum.isWithinNext))"></select>
                    </td>
                    <td class="action" style="white-space:nowrap;vertical-align:middle">
                        
                        <a href="#" id="advOptAddCriteria" name="addTerm" data-bind="click: function () {$parent.addTerm(); if($parent.components.length > 0 && $parent.components[0].Name != 'CaseClassification') $root.logicVisible(true); else  $parents[1].logicVisible(true);}">Add</a>

                        <a href="#" id="advOptRemoveCriteria" data-bind="click: function () { clue.confirm('Remove this term?', function (){$parent.removeTerm($data);}); }">Delete</a>
        
                        
                    </td>
                </tr>
            </tbody>
        </table>
    </div>    
</script>

    </div>
    <div class="dialogs"></div>
    <script src="/team3/scripts/jQuery?v=N9X31oj24lli1uVFpX6uj0M2WdN7GdgMjnvYEUoIx7s1"></script>
<script src="/team3/scripts/site?v=-_YRJC0N9aTHlLZ_SHPON9ghyPv3ohrecwwf0woXqnQ1"></script>

    <script>
        $(function () {
            clue.baseUrl = '/team3/';
            clue._dateFormat = 'dd/MM/yyyy'.toLowerCase();
        });
    </script>
    
    <script>
        $(function () {
            $(".submenu").menu();
            var options = {"$type":"RegisterIndexViewModel","Caption":null,"RestrictedAppendText":"Refer to intelligence manager","DisableFreetext":false,"SearchUrl":"/team3/api/AddressApi/Search/0","DetailsUrl":"/team3/Address/Details","AttachmentUrl":"/team3/api/AddressApi/ViewAttachment","RegisterIndexUrl":null,"AddViewUrl":"/team3/api/AddressApi/AddView","UpdateViewUrl":"/team3/api/AddressApi/UpdateView","DeleteViewUrl":"/team3/api/AddressApi/DeleteView","ExportUrl":"/team3/api/AddressApi/Export/0","MapUrl":null,"GetLocationsUrl":null,"MapApiKey":"Owkr31DJTKST0oeO-YcZv52txtgmMhjLAuecGdxVrdY","BulkUrl":"/team3/api/AddressApi/Bulk","ViewThumbnailUrl":"/team3/api/AddressApi/ViewThumbnail","CustomUserSettings":null,"AvailableViews":[{"$type":"RegisterIndexView","Id":-1,"UserId":null,"ComponentId":0,"Name":"System View","IsDefault":false,"ShowOnDashboard":false,"DashboardOrder":0,"SearchRecords":true,"SearchAttachments":true,"AssignedToMe":false,"Filter":null,"Fields":[{"$type":"ViewField","Name":"Urn","Title":"URN","Type":0},{"$type":"ViewField","Name":"FullAddress","Title":"Address","Type":0},{"$type":"ViewField","Name":"Postcode","Title":null,"Type":0},{"$type":"ViewField","Name":"Easting","Title":"Easting","Type":2},{"$type":"ViewField","Name":"Northing","Title":"Northing","Type":2}],"ChartType":null,"SortBy":[{"$type":"SearchSortBy","Field":"","Order":"Z-A"}]},{"$type":"RegisterIndexView","Id":57,"UserId":2,"ComponentId":65537,"Name":"Addresses of interest","IsDefault":true,"ShowOnDashboard":false,"DashboardOrder":0,"SearchRecords":true,"SearchAttachments":true,"AssignedToMe":false,"Filter":"{\u0022terms\u0022:[{\u0022Field\u0022:\u0022*\u0022,\u0022Operator\u0022:\u0022Contains\u0022,\u0022Value\u0022:\u0022\u0022,\u0022FriendlyName\u0022:\u0022[Any field]\u0022}],\u0022logic\u0022:\u00221\u0022}","Fields":[{"$type":"ViewField","Name":"FullAddress","Title":"Full Address","Type":1},{"$type":"ViewField","Name":"Postcode","Title":null,"Type":1},{"$type":"ViewField","Name":"Easting","Title":null,"Type":2},{"$type":"ViewField","Name":"Northing","Title":null,"Type":2},{"$type":"ViewField","Name":"MainImageId","Title":"Main Image","Type":1}],"ChartType":null,"SortBy":[{"$type":"SearchSortBy","Field":"","Order":"Z-A"}]},{"$type":"RegisterIndexView","Id":0,"UserId":null,"ComponentId":0,"Name":"Add new view","IsDefault":false,"ShowOnDashboard":false,"DashboardOrder":0,"SearchRecords":true,"SearchAttachments":true,"AssignedToMe":false,"Filter":null,"Fields":[],"ChartType":null,"SortBy":[{"$type":"SearchSortBy","Field":"","Order":"Z-A"}]}],"AvailableInvestigations":null,"Components":[{"$type":"ComponentInfo","Id":65537,"Name":"Address","Fields":[{"$type":"FieldInfo","FieldName":"AddressLine1","FriendlyName":"Address Line 1","FieldType":1,"MaxLength":60,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"AddressLine2","FriendlyName":"Address Line 2","FieldType":1,"MaxLength":60,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"AddressLine3","FriendlyName":"Address Line 3","FieldType":1,"MaxLength":60,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"AddressLine4","FriendlyName":"Address Line 4","FieldType":1,"MaxLength":60,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"AddressLine5","FriendlyName":"Address Line 5","FieldType":1,"MaxLength":60,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"AddressLine6","FriendlyName":"Address Line 6","FieldType":1,"MaxLength":60,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Country","FriendlyName":null,"FieldType":4,"MaxLength":100,"LookupId":"6106889b-d273-45d6-84b9-87567cc71b18","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"CreatedBy","FriendlyName":"Creator","FieldType":1,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"DateCreated","FriendlyName":"Date Created","FieldType":3,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"DateLastUpdated","FriendlyName":"Date Last Updated","FieldType":3,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Easting","FriendlyName":null,"FieldType":2,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"FullAddress","FriendlyName":"Full Address","FieldType":1,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Latitude","FriendlyName":null,"FieldType":2,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Longitude","FriendlyName":null,"FieldType":2,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"MainImageId","FriendlyName":"Main Image","FieldType":1,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":true},{"$type":"FieldInfo","FieldName":"Northing","FriendlyName":null,"FieldType":2,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Notes","FriendlyName":null,"FieldType":1,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Postcode","FriendlyName":null,"FieldType":1,"MaxLength":8,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Reason","FriendlyName":"Reason for Nominal","FieldType":1,"MaxLength":255,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"RecordStatus","FriendlyName":"Record Status","FieldType":4,"MaxLength":255,"LookupId":"0ac1577d-45e4-4434-a684-ef3b581b4e8f","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Reference","FriendlyName":null,"FieldType":1,"MaxLength":50,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"RetainDate","FriendlyName":"Retain Date","FieldType":3,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"RetainPeriod","FriendlyName":"Retain For","FieldType":4,"MaxLength":100,"LookupId":"385c9875-54f2-4535-9eef-44062a301900","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"ReviewPeriod","FriendlyName":"Review After","FieldType":4,"MaxLength":255,"LookupId":"a54a367e-aa4b-4644-93a9-e887f54e2b1d","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"ReviewDate","FriendlyName":"Review Date","FieldType":3,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"SecurityClassification","FriendlyName":"Security Classification","FieldType":4,"MaxLength":100,"LookupId":"1a8522d7-810f-4d81-93c4-9dd8a6c7a161","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Source","FriendlyName":null,"FieldType":1,"MaxLength":255,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Subtype","FriendlyName":null,"FieldType":4,"MaxLength":255,"LookupId":"7113ce57-7fa7-4944-abd5-27bb6638a0b9","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Tags","FriendlyName":null,"FieldType":8,"MaxLength":100,"LookupId":"f1409733-9996-4d8b-b117-9bc8e1bf6587","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Type","FriendlyName":null,"FieldType":4,"MaxLength":255,"LookupId":"997b67cb-0edb-439c-ba1e-4f8d8f8c9482","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Urn","FriendlyName":"URN","FieldType":1,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false}],"FilterFields":[{"$type":"FieldInfo","FieldName":"*","FriendlyName":"[Any field]","FieldType":0,"MaxLength":100,"LookupId":null,"HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"AddressLine1","FriendlyName":"Address Line 1","FieldType":1,"MaxLength":60,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"AddressLine2","FriendlyName":"Address Line 2","FieldType":1,"MaxLength":60,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"AddressLine3","FriendlyName":"Address Line 3","FieldType":1,"MaxLength":60,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"AddressLine4","FriendlyName":"Address Line 4","FieldType":1,"MaxLength":60,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"AddressLine5","FriendlyName":"Address Line 5","FieldType":1,"MaxLength":60,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"AddressLine6","FriendlyName":"Address Line 6","FieldType":1,"MaxLength":60,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Country","FriendlyName":null,"FieldType":4,"MaxLength":100,"LookupId":"6106889b-d273-45d6-84b9-87567cc71b18","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"CreatedBy","FriendlyName":"Creator","FieldType":1,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"DateCreated","FriendlyName":"Date Created","FieldType":3,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"DateLastUpdated","FriendlyName":"Date Last Updated","FieldType":3,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Easting","FriendlyName":null,"FieldType":2,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"FullAddress","FriendlyName":"Full Address","FieldType":1,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Latitude","FriendlyName":null,"FieldType":2,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Longitude","FriendlyName":null,"FieldType":2,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Northing","FriendlyName":null,"FieldType":2,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Notes","FriendlyName":null,"FieldType":1,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Postcode","FriendlyName":null,"FieldType":1,"MaxLength":8,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Reason","FriendlyName":"Reason for Nominal","FieldType":1,"MaxLength":255,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"RecordStatus","FriendlyName":"Record Status","FieldType":4,"MaxLength":255,"LookupId":"0ac1577d-45e4-4434-a684-ef3b581b4e8f","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Reference","FriendlyName":null,"FieldType":1,"MaxLength":50,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"RetainDate","FriendlyName":"Retain Date","FieldType":3,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"RetainPeriod","FriendlyName":"Retain For","FieldType":4,"MaxLength":100,"LookupId":"385c9875-54f2-4535-9eef-44062a301900","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"ReviewPeriod","FriendlyName":"Review After","FieldType":4,"MaxLength":255,"LookupId":"a54a367e-aa4b-4644-93a9-e887f54e2b1d","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"ReviewDate","FriendlyName":"Review Date","FieldType":3,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"SecurityClassification","FriendlyName":"Security Classification","FieldType":4,"MaxLength":100,"LookupId":"1a8522d7-810f-4d81-93c4-9dd8a6c7a161","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Source","FriendlyName":null,"FieldType":1,"MaxLength":255,"LookupId":"","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Subtype","FriendlyName":null,"FieldType":4,"MaxLength":255,"LookupId":"7113ce57-7fa7-4944-abd5-27bb6638a0b9","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Tags","FriendlyName":null,"FieldType":8,"MaxLength":100,"LookupId":"f1409733-9996-4d8b-b117-9bc8e1bf6587","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Type","FriendlyName":null,"FieldType":4,"MaxLength":255,"LookupId":"997b67cb-0edb-439c-ba1e-4f8d8f8c9482","HideForColumns":false,"HideForFilters":false},{"$type":"FieldInfo","FieldName":"Urn","FriendlyName":"URN","FieldType":1,"MaxLength":100,"LookupId":"","HideForColumns":false,"HideForFilters":false}]}],"IsMemberOfaStructualTeam":false};
            var settings = {"$type":"RegisterIndexViewModelSettings","AvailableTags":[],"AvailableInvestigations":[{"$type":"InvestigationOption","Id":11,"Title":"COLEMAN Andy - Gumtree Car Fraud"},{"$type":"InvestigationOption","Id":13,"Title":"ELFORD Animal Cruelty"},{"$type":"InvestigationOption","Id":14,"Title":"GULL Match fixing"},{"$type":"InvestigationOption","Id":12,"Title":"Rosalyn LOMBARDI reported theft by Kerry CLIFFORD"}],"SelectedInvestigationId":0,"SelectedInvestigationName":null,"ShowInvestigationNumbering":true};
            settings.ComponentName = options.Components[0].Name;
            var vm = new clue.register.RegisterIndexViewModel(options, settings);

            // doing this to avoid a double search when a user selects back from a record
            if($.bbq.getState("search") != null)
            {
                vm.allowSearch(false);
            }
            else
            {
                vm.allowSearch(true);
            }

            vm.bind('root');
            var vmInvests = new clue.investigationsViewModel(settings);
            vmInvests.bind('header');


            // our hashchange stuff goes here
            $(window).bind("hashchange", function(e) {

                // getting our search data
                var searchData = $.bbq.getState("search");

                if(searchData != null && !vm.bindSearch())
                {
                    vm.allowSearch(true);
                    vm.search();
                }
                else
                {
                    vm.bindSearch(false);
                }
            });

            // trigger our hashchange event
            $(window).trigger("hashchange");
        });
    </script>

    <script>
        $(function () {
            var globalQuickSearch = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: {
                    url: clue.baseUrl + 'api/searchapi/quicksearch?q=%QUERY&i=0',
                    wildcard: '%QUERY',
                    transform: function (response) {
                        return response.Hits;
                    }
                },
                sufficient: 100
            });

            $('#globalQuickSearch').typeahead({
                minLength: 3,
                hint: false,
                highlight: true
            }, {
                    name: 'globalQuickSearch',
                    display: function (s) {
                        var e = document.getElementById('globalQuickSearch');
                        return e.value;
                    },
                    templates: {
                        suggestion: function (s) {
                            return $.parseHTML('<div style="max-width:346px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' +
                                '<a href="' + clue.baseUrl + s.Register + '/details/0/' + s.Id + '">' + s.Register + ' [' + clue.getInvestigationNo(s.InvestigationNo, 0, s.Urn, ('True' == 'True' && s.Register != 'Intelligence')) + ']</a>' +
                                ((s.CreatedInvestigationId || 0) == 0 ? '' : ' <i class="fas fa-lock"></i>') +
                                ' <span title="' + (s.Title === null ? '' : s.Title) + '">' + (s.Title === null ? '' : s.Title) + '</span>' +
                                '</div>');
                        }
                    },
                    limit: 100,
                    source: globalQuickSearch
                });

            $('#globalQuickSearch').on('typeahead:beforeselect', function (event, data) {
                event.stopPropagation();
                window.location.href = clue.baseUrl + data.Register + '/details/0/' + data.Id;
            });
            $('.main').show();
            $('body,html').scroll();
        });
    </script>
</body>
</html>