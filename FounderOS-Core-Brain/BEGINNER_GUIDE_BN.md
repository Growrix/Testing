# FounderOS Beginner Guide (Bangla)

## 1. সবচেয়ে সহজভাবে FounderOS কী

FounderOS দুই ভাগে চলে:

1. Code root
- এই folder: `FounderOS-Core-Brain`
- এখানে app-এর code থাকে

2. Data root
- এই folder: `C:\Users\User\founderos_core_brain`
- এখানে আপনার chats, clients, tasks, decisions, summaries save হয়

সহজ ভাষায়:
- `FounderOS-Core-Brain` = machine
- `founderos_core_brain` = machine যা data জমায়

## 2. কেন `C:\Users\User\founderos_core_brain` তৈরি হয়েছে

কারণ app-এর default setting হলো:
- storageRoot set না থাকলে
- Windows user home folder-এর ভিতরে `founderos_core_brain` folder use করবে

তাই এটা automatic তৈরি হয়েছে।

এটা bug না। এটা intentional default.

## 3. `client_acme_plumbing` কোথা থেকে এলো

এটা আপনার random test message থেকে আসেনি।

এটা earlier validation/test run থেকে তৈরি হয়েছে, যেখানে sample client হিসেবে `Acme Plumbing` use করা হয়েছিল.

মানে:
- এটা test data
- এটা real business data না
- চাইলে পরে delete করতে পারবেন

## 4. যদি C drive crash করে তাহলে কী হবে

Short answer:
- হ্যাঁ, backup না থাকলে local memory হারিয়ে যাবে

কারণ Phase 1 system local-only.
- No cloud sync
- No remote backup
- No database replication

তাই safest usage হলো:
- code এক জায়গায়
- data আরেক safe জায়গায়
- regular backup রাখা

## 5. আমার recommendation for storage

Beginner-friendly safe setup:

1. Code রাখুন:
- `F:\PROJECTS\testing\FounderOS-Core-Brain`

2. Data রাখুন আলাদা জায়গায়:
- `F:\FounderOS-Data`
বা
- `D:\FounderOS-Data`

3. VS Code setting-এ change করুন:
- `founderos.storageRoot`

Suggested value:
- `F:\FounderOS-Data`

## 6. Storage root change করার সহজ উপায়

### Option A: Settings UI

1. VS Code খুলুন
2. `Ctrl+,`
3. Search box-এ লিখুন: `founderos storage root`
4. value দিন:
   - `F:\FounderOS-Data`
5. Window reload করুন

### Option B: Settings JSON

Settings JSON-এ যোগ করুন:

```json
{
  "founderos.storageRoot": "F:\\FounderOS-Data"
}
```

## 7. First-use rule

যদি clean test চান, আগে পুরনো sample test data ignore করুন বা আলাদা test client name ব্যবহার করুন.

Use this pattern:
- নিজের নাম বা date add করুন

Example:
- `@founderos /new-client Rahim Test Client`
- `@founderos /new-client Plumbing Test 2026`

এতে পুরনো `Acme Plumbing` data-এর সাথে mix হবে না.

## 8. Start থেকে end পর্যন্ত আপনি কী করবেন

### Step 1: VS Code reload করুন
Command Palette খুলুন:
- `Ctrl+Shift+P`
- লিখুন: `Developer: Reload Window`

### Step 2: Copilot Chat খুলুন

### Step 3: এই line paste করুন

```text
@founderos /status
```

Expected:
- system status table আসবে
- storage root দেখাবে

### Step 4: নিজের test client বানান

এই line paste করুন:

```text
@founderos /new-client Plumbing Test 2026
```

Expected:
- নতুন client workspace create হবে

### Step 5: note ingest করুন

এই line paste করুন:

```text
@founderos /ingest Client Plumbing Test 2026 needs a 5-page plumbing website. TODO: send quote by Friday. Decision: use blue-white brand.
```

Expected:
- raw note save হবে
- summary save হবে
- task/decision extract হবে

### Step 6: old context retrieve করুন

এই line paste করুন:

```text
@founderos /retrieve Plumbing Test 2026
```

Expected:
- related memory দেখাবে

### Step 7: normal business question করুন

এই line paste করুন:

```text
@founderos What is the current plan for Plumbing Test 2026?
```

Expected:
- agent known context use করে answer দেবে

### Step 8: task board দেখুন

এই line paste করুন:

```text
@founderos /tasks
```

Expected:
- extracted task দেখাবে

### Step 9: status আবার দেখুন

এই line paste করুন:

```text
@founderos /status
```

Expected:
- active project count, task count, summaries count update হবে

## 9. Copy-Paste Human Test Sequence

নিচের lines একটার পর একটা use করুন:

```text
@founderos /status
```

```text
@founderos /new-client Plumbing Test 2026
```

```text
@founderos /ingest Client Plumbing Test 2026 needs a 5-page plumbing website. TODO: send quote by Friday. Decision: use blue-white brand.
```

```text
@founderos /retrieve Plumbing Test 2026
```

```text
@founderos What is the current plan for Plumbing Test 2026?
```

```text
@founderos /tasks
```

```text
@founderos /status
```

## 10. কোন action কোন file create করে

### `@founderos /new-client ...`
Creates:
- `projects/client_<slug>/metadata.json`
- `overview.md`
- `scope.md`
- `plan.md`
- `tasks.json`
- `decisions.json`

### `@founderos /ingest ...`
Creates or updates:
- `inbox/raw/...txt`
- `memory/summaries/...md`
- project-linked notes when matched
- task/decision files when project matching works

### normal chat
Creates:
- `memory/chats/chat_<date>.json`

### `/status`
Usually reads data only
- mostly reports current state

## 11. যদি clean start চান

আপনার কাছে দুইটা option আছে:

1. বর্তমান auto-created root use করুন
- fastest
- already working

2. নতুন clean data folder set করুন
- better for real usage
- recommended

Recommended real usage path:
- `founderos.storageRoot = F:\FounderOS-Data`

## 12. Final beginner advice

- `Acme Plumbing` কে sample/test client ভাবুন
- real কাজের জন্য নতুন client name use করুন
- data root আলাদা drive-এ move করা ভালো
- weekly backup রাখুন
- একেকটা command-এর পর folder দেখুন, তাহলে system বুঝতে সহজ হবে
