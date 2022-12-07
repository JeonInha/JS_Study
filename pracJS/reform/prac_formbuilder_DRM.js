function deleteBtn(controlElement) {
    var controlName;
    var rowIndex = reformUseProc.getRowIndexOfControlInGrid(controlElement.id);

    // ctrl + del event 생성
    var deletekeyEvent = document.createEvent("Event");  
    deletekeyEvent.initEvent("keyup", false, false);  
    deletekeyEvent.keyCode = 46;  
    deletekeyEvent.ctrlKey = true;  

    if (rowIndex > 0) {
        controlName = "hiddenControl_"+rowIndex;
    } else {
        window.alert("초기행은 삭제할 수 없습니다.");
    }

    // 이벤트 전달
    document.getElementById(controlName).dispatchEvent(deletekeyEvent);  
}


function addRowBtn() {
    var controlName;
    var rowIndex = reformUseProc.getGridRowCount("control1");

    if (rowIndex==0)    {
        controlName = "hiddenControl";
    } else {
         controlName = "hiddenControl_"+(rowIndex-1);
    }

    // 이벤트 전달
    event.keyCode = 13;
   reformUseProc.extendGridRow(document.getElementById(controlName));
}

function hiddenKeyHandler(controlElement) {
    reformUseProc.extendGridRow(controlElement);
}

// 이름 입력하는 콘트롤박스의 keyup에 맵핑
function isPressedEnter(controlElement) {
    var selectedValue = controlElement.value;
    var result = reformUseProc.executeQuery(
        "DB_show_userMaster", // 첫째 인자: 입력해둔 쿼리문
        document,   // 둘째 인자: documnt객체
        [selectedValue], // 셋째 인자. 쿼리문 수행 시 필요한 인자

        // 넷째 인자: resultSet을 받아 작업 수행하는 함수
        function (resultSet) {
            var key = event.keyCode;
            if (key == 13) {
                for (let i = 0; i < resultSet.length; i++) {
                    addRowBtn(controlElement);
                    resultMapping(i, reformUseProc.getGridRowCount("control1"), resultSet);
                }
            }        
            return false; // 폼빌더 기본 처리기가 처리하지 않게 false 반환
        },

        // 다섯째 인자: 오류 핸들러 함수
        function (httpStatusCode) {
            alert("An error happend. httpStatusCode=" + httpStatusCode);
        }
    );
    return result;
}

// RowIndex에서 2를 빼는 이유: length와 lastIndex의 차이때문에 1 뺌 // header가 있어서 1 뺌.
function resultMapping(DataIndex, RowIndex, resultSet) {
    if  (RowIndex-2 == 0) {
        reformUseProc.setTextBoxValueWithId("name", resultSet[DataIndex].DISPLAYNAME);
        reformUseProc.setTextBoxValueWithId("id", resultSet[DataIndex].CN);
        reformUseProc.setTextBoxValueWithId("title", resultSet[DataIndex].TITLE);
        reformUseProc.setTextBoxValueWithId("depart", resultSet[DataIndex].DESCRIPTION);
    } else {
        reformUseProc.setTextBoxValueWithId("name_"+String (RowIndex-2), resultSet[DataIndex].DISPLAYNAME);
        reformUseProc.setTextBoxValueWithId("id_"+String (RowIndex-2), resultSet[DataIndex].CN);
        reformUseProc.setTextBoxValueWithId("title_"+String (RowIndex-2), resultSet[DataIndex].TITLE);
        reformUseProc.setTextBoxValueWithId("depart_"+String (RowIndex-2), resultSet[DataIndex].DESCRIPTION);
    }
}




