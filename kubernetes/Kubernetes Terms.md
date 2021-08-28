# Kubernetes Terms

---

- **Cluster:** A collection of nodes and a master to manage them.
- **Node:** A virtual machine that runs containers.
- **Pod:** A running container, can run multiple containers.
- **Deployment:** Monitors a set of pods, makes sure they are running and restarts them if they crash.
- **Service:** Provides an easy to remember URL to access a running container.
- **Load Balancer Service:** Tells Kubernetes to reach out to its provider and provisions a load balancer. Gets traffic in to a single pod
- **Ingress Controller:** A pod with a set of routing rules to distribute traffic to other services.
