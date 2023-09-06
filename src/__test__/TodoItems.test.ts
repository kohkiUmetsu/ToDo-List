import { test, expect } from "vitest"
import { render, fireEvent } from '@testing-library/react'
import InputItem from "../components/InputItem"
import userEvent from '@testing-library/user-event'

test ('add item', () => {
    // レンダリング
  const { getByText, getByPlaceholderText } = render(InputItem);

  // 入力フィールドとボタンを取得
  const inputField = getByPlaceholderText('タスクを入力...')
  const addButton = getByText('追加')

  // テキスト入力とボタンクリック
  fireEvent.change(inputField, { target: { value: '新しいアイテム' } });
  fireEvent.click(addButton);

  // 新しいアイテムが表示されていることを確認
  const newItem = getByText('新しいアイテム');
  expect(newItem).toBeInTheDocument();
})