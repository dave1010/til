# Docker Shortcuts

Drop into bash on the most recently ran container:

    docker exec -it $(docker ps -ql) bash
