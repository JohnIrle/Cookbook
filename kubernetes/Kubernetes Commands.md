# Kubernetes Commands

---

Tell kubernetes to process a configuration file.

```sh
kubectl apply -f [config file name]
```

Apply all config files in a direcotry.

```sh
kubectl apply -f .
```

Create a secret

```sh
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
```

### Pods

---

List running pods

```sh
kubectl get pods
```

Execute a command in a running pod

```sh
kubectl exec -it [pod_name][cmd]
```

Print logs from a pod

```sh
kubectl logs [pod_name]
```

Delete a pod

```sh
kubectl delete pod [pod_name]
```

Print out information about a running pod

```sh
kubectl describe pod [pod_name]
```

### Deployments

---

List all running deployments

```sh
kubectl get deployments
```

Print out information about a deployment.

```sh
kubectl describe deployment [depl name]
```

Delete a deployment

```sh
kubectl delete deployment
```

PortForwarding

```sh
kubectl get pods
kubectl port-forward <podname> connectPort:podPort
```
