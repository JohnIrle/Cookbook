# Kubernetes Services

---

- **Cluster IP:** Sets up an easy to remember URL to access a pod. Only exposes pods in the cluster.
- **Node Port:** Makes a pod accessible form outside the cluster. Mostly used for dev.
- **Load Balancer:** Makes a pod accessible from outside the cluster. The right way to expose a pod to the outside world.
- **External Name:** Redirects an in-cluster request to a CNAME url.

### Creating a NodePort Service

---

Create a service config file and apply it.
Example Spec from config:

```yaml
spec:
  type: NodePort
  selector:
    app: posts
  ports:
    - name: post
      protocol: TCP
      port: 4000
      targetPort: 4000
```

Access with localhost after finding the port:

```sh
kubectl desicribe service [service name]
```

```
https://localhost:[NodePortValue]/posts
```

### Creating a Cluster IP Service

---

Three dashes lets you append more configurations in a single file.
Append the config to the end of the deployment config file:

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: posts-clusterip-srv
spec:m
  selector:
    app: posts
  ports:
    - name: posts
      protocol: TCP
      port: 4000
      targetPort: 400
```
