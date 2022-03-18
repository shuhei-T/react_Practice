import { ChangeEvent, useState, FC, useCallback } from "react";
import styled from "styled-components";
import { MemoList } from "./MomoList";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {
  // カスタムフックからそれぞれ取得
  const { memos, addTodo, deleteTodo } = useMemoList();
  // テキストボックスState
  const [text, setText] = useState<string>("");
  // メモ一覧State
  // const [memos, setMemos] = useState<string[]>([]);

  // テキストボックス入力時に入力内容をStateに設定
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  // [追加]ボタン押下時
  const onClickAdd = () => {
    // // State変更を正常に検知させるため新たな配列を生成
    // const newMemos = [...memos];
    // // テキストボックスの入力内容をメモ配列に追加
    // newMemos.push(text);
    // setMemos(newMemos);
    // カスタムフックのメモ追加ロジック実行
    addTodo(text);
    // テキストボックスを空に
    setText("");
  };

  // [削除]ボタン押下時(何番目が押されたかを引数で受け取る)
  const onClickDelete = useCallback((index: number) => {
    // State変更を正常に検知させるため新たな配列を生成
    // const newMemos = [...memos];
    // // メモ配列から該当の要素を削除
    // newMemos.splice(index, 1);
    // setMemos(newMemos);
    // カスタムフックのメモ削除ロジック実行
    deleteTodo(index);
  }, [deleteTodo]);

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <Sbutton onClick={onClickAdd}>追加</Sbutton>
      <MemoList memos={memos} onClickDelete={onClickDelete} />
    </div>
  );
};

const Sbutton = styled.button`
  margin-left: 16px;
`;
