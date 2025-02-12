/*
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
package org.xwiki.index.migration;

import java.util.List;

import javax.inject.Named;
import javax.inject.Singleton;

import org.xwiki.component.annotation.Component;
import org.xwiki.internal.migration.AbstractDocumentsMigration;
import org.xwiki.query.Query;
import org.xwiki.query.QueryException;

import com.xpn.xwiki.XWiki;
import com.xpn.xwiki.XWikiContext;
import com.xpn.xwiki.doc.XWikiDocument;
import com.xpn.xwiki.store.migration.DataMigrationException;
import com.xpn.xwiki.store.migration.XWikiDBVersion;

import static org.xwiki.index.internal.DefaultLinksTaskConsumer.LINKS_TASK_TYPE;

/**
 * Migrates the links by reindexing all the documents of the farm.
 *
 * @version $Id$
 * @since 14.2RC1
 * @deprecated link storage and indexing moved to Solr (implemented in xwiki-platform-search-solr-api)
 */
@Component
@Singleton
@Named(R140300000XWIKI19614DataMigration.HINT)
@Deprecated(since = "14.8RC1")
public class R140300000XWIKI19614DataMigration extends AbstractDocumentsMigration
{
    /**
     * The hint for this component.
     */
    public static final String HINT = "R140300000XWIKI19614";

    @Override
    public String getName()
    {
        return HINT;
    }

    @Override
    public String getDescription()
    {
        return "Queue all the document of the wiki for links indexing.";
    }

    @Override
    public XWikiDBVersion getVersion()
    {
        return new XWikiDBVersion(140900000);
    }

    @Override
    protected String getTaskType()
    {
        return LINKS_TASK_TYPE;
    }

    @Override
    protected List<String> selectDocuments() throws DataMigrationException
    {
        List<String> documents;
        XWikiContext context = getXWikiContext();
        XWiki wiki = getXWikiContext().getWiki();
        if (context.getWiki().hasBacklinks(context)) {
            try {
                documents = wiki.getStore().getQueryManager()
                    .createQuery("SELECT doc.fullName FROM XWikiDocument doc", Query.HQL)
                    .setWiki(context.getWikiId())
                    .execute();
            } catch (QueryException e) {
                throw new DataMigrationException(
                    String.format("Failed retrieve the list of all the documents for wiki [%s].", wiki.getName()), e);
            }
        } else {
            documents = List.of();
        }
        return documents;
    }

    @Override
    protected void logBeforeQueuingTask(XWikiDocument document)
    {
        // No logs here as it would be too verbose (all documents of the wiki are queued).
    }

    @Override
    protected void logBeforeQueuingTasks(List<XWikiDocument> documents)
    {
        XWikiContext context = getXWikiContext();
        if (context.getWiki().hasBacklinks(context)) {
            super.logBeforeQueuingTasks(documents);
        } else {
            this.logger.info("Skipped because backlinks are not supported on [{}]", context.getWikiId());
        }
    }
}
