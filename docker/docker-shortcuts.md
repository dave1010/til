# Docker Shortcuts

Drop into bash on the most recently ran container:

```bash
docker exec -it $(docker ps -ql) bash
```
