---
name: microsoft-docs
description: Search and retrieve Microsoft official documentation (Azure, .NET, M365, Windows, etc.) from learn.microsoft.com without MCP. Use this skill whenever the user asks about Microsoft technologies, Azure services, .NET APIs, PowerShell cmdlets, or any topic that would benefit from official Microsoft documentation. Trigger on phrases like "Microsoft docs", "Azure docs", "learn.microsoft.com", ".NET reference", "check Microsoft documentation", or any time you'd normally reach for microsoft.docs.mcp.
---

# Microsoft Docs Skill

MCPサーバー不要でMicrosoft公式ドキュメントを検索・取得するスキルです。
`learn.microsoft.com` のパブリックSearch APIと `web_fetch` を使い、
`microsoft.docs.mcp` と同等の情報へ直接アクセスします。

---

## 基本方針

1. **Search API でドキュメントを検索する**(まずはこちら)
2. **ヒットしたURLを `web_fetch` で取得する**(詳細が必要なとき)
3. MCPサーバーの起動・認証は一切不要

---

## Step 1: ドキュメントを検索する

### エンドポイント

```
https://learn.microsoft.com/api/search?search={query}&locale={locale}&$top={n}
```

### パラメータ

| パラメータ | 説明                           | 例                                |
| ---------- | ------------------------------ | --------------------------------- |
| `search`   | 検索クエリ(URLエンコード)      | `Azure+Blob+Storage`              |
| `locale`   | 言語ロケール                   | `ja-jp` / `en-us`                 |
| `$top`     | 取得件数(デフォルト10、最大50) | `5`                               |
| `facet`    | カテゴリ絞り込み(任意)         | `azure` / `dotnet` / `powershell` |

### 実行例

```bash
curl "https://learn.microsoft.com/api/search?search=Azure+Blob+Storage&locale=ja-jp&\$top=5"
```

### レスポンス構造(抜粋)

```json
{
  "count": 5,
  "results": [
    {
      "title": "Azure Blob Storage の概要",
      "url": "https://learn.microsoft.com/ja-jp/azure/storage/blobs/storage-blobs-introduction",
      "description": "...",
      "lastModified": "2024-11-01"
    }
  ]
}
```

`results[].url` と `results[].description` を見て、必要なページを判断します。

---

## Step 2: ページ本文を取得する

検索結果のURLを `web_fetch` に渡すだけです。

```
web_fetch("https://learn.microsoft.com/ja-jp/azure/storage/blobs/storage-blobs-introduction")
```

### 日本語 / 英語の切り替え

URLの言語セグメントを置換するだけで切り替えられます。

```
/ja-jp/  ←→  /en-us/
```

---

## よく使う検索クエリパターン

| 知りたいこと              | 検索クエリ例                              |
| ------------------------- | ----------------------------------------- |
| Azure サービスの概要      | `Azure Functions overview`                |
| .NET API リファレンス     | `System.Collections.Generic.List`         |
| PowerShell コマンドレット | `Get-AzStorageAccount cmdlet`             |
| M365 / Graph API          | `Microsoft Graph API send mail`           |
| ARM テンプレート          | `Azure Resource Manager template storage` |
| CLI コマンド              | `az webapp create CLI`                    |

---

## 補足:REST API ドキュメントを直接参照する場合

Azure REST APIのOpenAPI仕様はGitHubで公開されています。

```bash
# azure-rest-api-specs リポジトリを直接取得
web_fetch("https://raw.githubusercontent.com/Azure/azure-rest-api-specs/main/specification/storage/resource-manager/readme.md")
```
