CREATE TRIGGER audit_todos_delete 
BEFORE DELETE ON todos
BEGIN
INSERT INTO todos_audit (task, createdat, updatedat, completed, UserId, auditDate) 
    VALUES (old.task, old.createdat, old.updatedat, old.completed, old.UserId, DATETIME('now'));
END