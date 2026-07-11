# InkFlow — Automation

Ядро автоматизации проекта. Работает на n8n (self-hosted через Docker).
Заявка с формы → webhook → n8n → уведомления, CRM, AI-квалификация лида.

## Запуск n8n

1. Docker Desktop должен быть запущен (иконка-кит в трее).
2. В терминале:

    docker run -it --rm --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n

3. Открыть в браузере: http://localhost:5678

Остановить: Ctrl+C в терминале, либо `docker stop n8n`.

## Структура

- `workflows/` — экспортированные воркфлоу n8n (JSON). Один файл = один воркфлоу.
- `scripts/` — JS-код для Code-нод внутри n8n.

## Как сохранить воркфлоу в репу

1. В n8n открыть воркфлоу → меню (три точки) → Download.
2. Падает .json → положить в `workflows/`.
3. Закоммитить: `git add . && git commit -m "feat: add <название> workflow"`

## Воркфлоу

- (пусто — первый появится после сборки intake-трубы)
