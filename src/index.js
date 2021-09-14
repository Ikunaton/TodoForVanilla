import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除.
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了のリストを作成する.
const createIncompleteList = (text) => {
  // div
  const div = document.createElement("div");
  div.className = "list-row";
  // li
  const li = document.createElement("li");
  li.innerText = text;
  // button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了したTODOに移動させたい.(未完了->削除, 完了->追加かつ戻すボタン)
    deleteFromIncompleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;

    // 完了したTODO.
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    // li
    const li = document.createElement("li");
    li.innerText = text;
    // 戻すボタン.
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 完了TODOから削除.
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // 未完了TODOへ戻す.
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    // divの子要素に設定.
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // div配下を消したい.
    deleteFromIncompleteList(deleteButton.parentNode);
    //
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
